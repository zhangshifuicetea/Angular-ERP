import {AfterViewInit, Directive, DoCheck, ElementRef, Inject, Input, NgZone, OnDestroy, Optional} from '@angular/core';
import {coerceBooleanProperty, coerceNumberProperty} from '../utils/coercion';
import {Platform} from '@angular/cdk/platform';
import {DOCUMENT} from '@angular/common';
import {fromEvent, Subject} from 'rxjs';
import {auditTime, takeUntil, window} from 'rxjs/operators';

@Directive({
  selector: '[appAutoSize]',
  exportAs: 'textareaAutosize',
  host: {
    'class': 'cdk-textarea-autosize',
    'rows': '1',
  }
})
export class AutoSizeDirective implements AfterViewInit, DoCheck, OnDestroy{

  @Input('autosizeMinRows')
  get minRows(): number {
    return this._minRows;
  }
  set minRows(val) {
    this._minRows = coerceNumberProperty(val);
  }

  @Input('autosizeMaxRows')
  get maxRows(): number {
    return this._maxRows;
  }
  set maxRows(val) {
    this._maxRows = coerceNumberProperty(val);
  }

  @Input('textareaAutoSize')
  get enabled(): boolean { return this._enabled; }
  set enabled(value: boolean) {
    value = coerceBooleanProperty(value);

    // Only act if the actual value changed. This specifically helps to not run
    // resizeToFitContent too early (i.e. before ngAfterViewInit)
    if (this._enabled !== value) {
      this._enabled = value;
    }

    if (!this._enabled) {
      this.reset();
    } else {
      this.resizeToFitContent(true);
    }
  }

  private _enabled = true;

  private _minRows = 0;
  private _maxRows = 0;
  private _initialHeight: string | undefined;
  private _document?: Document;
  private _textareaElement: HTMLTextAreaElement;
  private _cachedLineHeight: number;

  private _previousValue?: string;
  private _previousMinRows = -1;

  private readonly _destroyed = new Subject<void>();

  constructor(
    private elementRef: ElementRef,
    private platform: Platform,
    private ngZone: NgZone,
    @Optional() @Inject(DOCUMENT) document?: any
  ) {
    this._document = document;
    this._textareaElement = this.elementRef.nativeElement as HTMLTextAreaElement;
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();

      this.ngZone.runOutsideAngular(() => {
        const win = this._getWindow();
        fromEvent(win, 'resize')
          .pipe(auditTime(16), takeUntil(this._destroyed))
          .subscribe(() => this.resizeToFitContent(true));
      });
    }
  }

  ngDoCheck(): void {
    if (this.platform.isBrowser) {
      this.resizeToFitContent();
    }
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  resizeToFitContent(force = false) {
    // enable ?
    if (!this._enabled) {
      return;
    }
    // cache the 1 row line height
    this.cacheTextareaLineHeight();
    // if have no cached height, we are still hidden
    if (!this._cachedLineHeight) {
      return;
    }

    // get the text value
    const textarea = this.elementRef.nativeElement as HTMLTextAreaElement;
    const value = textarea.value;
    // only resize if the value or minRows have changed
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    // get the placeholder text
    const placeholderText = textarea.placeholder;
    // reset the textarea height to auto，remove the placeholder text
    textarea.classList.add('cdk-textarea-autosize-measuring');
    textarea.placeholder = '';
    // get and set the height with scroll height
    const height = textarea.scrollHeight - 4;
    textarea.style.height = `${height}px`;
    textarea.classList.remove('cdk-textarea-autosize-measuring');
    textarea.placeholder = placeholderText;
    // scroll to caret position
    this.ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => this.scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this.scrollToCaretPosition(textarea), 0);
      }
    });
    // store value to previous value and minRows
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }

  cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }

    const textareaClone = this._textareaElement.cloneNode(false) as HTMLTextAreaElement;
    textareaClone.rows = 1;
    textareaClone.style.position = 'absolute';
    textareaClone.style.visibility = 'hidden';
    textareaClone.style.border = 'none';
    textareaClone.style.padding = '0';
    textareaClone.style.height = '';
    textareaClone.style.minHeight = '';
    textareaClone.style.maxHeight = '';
    textareaClone.style.overflow = 'hidden';

    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    this._textareaElement.parentNode.removeChild(textareaClone);
  }

  scrollToCaretPosition(textarea: HTMLTextAreaElement) {
    const {selectionStart, selectionEnd} = textarea;
    const document = this.getDocument();
    if (!this._destroyed.isStopped && document.activeElement === textarea) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }

  getDocument(): Document {
    return this._document || document;
  }

  private _getWindow(): Window {
    const doc = this.getDocument();
    return doc.defaultView;
  }

  reset() {
    // Do not try to change the textarea, if the initialHeight has not been determined yet
    // This might potentially remove styles when reset() is called before ngAfterViewInit
    if (this._initialHeight !== undefined) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }

}
