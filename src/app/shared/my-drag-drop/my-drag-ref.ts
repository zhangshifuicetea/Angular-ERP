// import {ElementRef, EmbeddedViewRef, NgZone, TemplateRef, ViewContainerRef} from '@angular/core';
// import {MyDropListRef} from './my-drop-list-ref';
// import {Observable, Subject, Subscription} from 'rxjs';
// import {coerceBooleanProperty, coerceElement} from '@angular/cdk/coercion';
// import {ViewportRuler} from '@angular/cdk/overlay';
// import {DragDropRegistry} from '@angular/cdk/drag-drop';
// import {normalizePassiveListenerOptions} from '@angular/cdk/platform';
//
// const activeCapturingEventOptions = normalizePassiveListenerOptions({
//   passive: false,
//   capture: true
// });
//
// /** Options that can be used to bind a passive event listener. */
// const passiveEventListenerOptions = normalizePassiveListenerOptions({passive: true});
//
// /** Options that can be used to bind an active event listener. */
// const activeEventListenerOptions = normalizePassiveListenerOptions({passive: false});
//
// export class MyDragRef<T = any> {
//   private _preview: HTMLElement;
//   private _previewRef: EmbeddedViewRef<any> | null;
//   private _placeholderRef: EmbeddedViewRef<any> | null;
//   private _placeholder: HTMLElement;
//   private _pickupPositionInElement: Point;
//   private _pickupPositionOnPage: Point;
//   private _anchor: Comment;
//   private _passiveTransform: Point = {x: 0, y: 0};
//   private _activeTransform: Point = {x: 0, y: 0};
//   private _initialTransform?: string;
//   private _hasStartedDragging: boolean;
//   private _hasMoved: boolean;
//   private _initialContainer: MyDropListRef;
//   private _initialIndex: number;
//   private _scrollPosition: {top: number, left: number};
//   private _moveEvents = new Subject<{
//     source: MyDragRef;
//     pointerPosition: {x: number, y: number};
//     event: MouseEvent | TouchEvent;
//     distance: Point;
//     delta: {x: -1 | 0 | 1, y: -1 | 0 | 1};
//   }>();
//   private _pointerDirectionDelta: {x: -1 | 0 | 1, y: -1 | 0 | 1};
//   private _pointerPositionAtLastDirectionChange: Point;
//   private _rootElement: HTMLElement;
//   private _rootElementTapHighlight: string | null;
//   private _pointerMoveSubscription = Subscription.EMPTY;
//   private _pointerUpSubscription = Subscription.EMPTY;
//   private _scrollSubscription = Subscription.EMPTY;
//   private _resizeSubscription = Subscription.EMPTY;
//   private _lastTouchEventTime: number;
//   private _dragStartTime: number;
//   private _boundaryElement: HTMLElement | null = null;
//   private _nativeInteractionsEnabled = true;
//   private _previewRect?: ClientRect;
//   private _boundaryRect?: ClientRect;
//   private _previewTemplate?: DragPreviewTemplate | null;
//   private _placeholderTemplate?: DragHelperTemplate | null;
//   private _handles: HTMLElement[] = [];
//   private _disabledHandles = new Set<HTMLElement>();
//   private _dropContainer?: MyDropListRef;
//   private _direction: Direction = 'ltr';
//   lockAxis: 'x' | 'y';
//   dragStartDelay: number | {touch: number, mouse: number} = 0;
//   previewClass: string|string[]|undefined;
//
//   get disabled(): boolean {
//     return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
//   }
//   set disabled(value: boolean) {
//     const newValue = coerceBooleanProperty(value);
//
//     if (newValue !== this._disabled) {
//       this._disabled = newValue;
//       this._toggleNativeDragInteractions();
//     }
//   }
//   private _disabled = false;
//
//   beforeStarted = new Subject<void>();
//   started = new Subject<{source: MyDragRef}>();
//   released = new Subject<{source: MyDragRef}>();
//   ended = new Subject<{source: MyDragRef, distance: Point}>();
//   entered = new Subject<{container: MyDropListRef, item: MyDragRef, currentIndex: number}>();
//   exited = new Subject<{container: MyDropListRef, item: MyDragRef}>();
//   dropped = new Subject<{
//     previousIndex: number;
//     currentIndex: number;
//     item: MyDragRef;
//     container: MyDropListRef;
//     previousContainer: MyDropListRef;
//     distance: Point;
//     isPointerOverContainer: boolean;
//   }>();
//   moved: Observable<{
//     source: MyDragRef;
//     pointerPosition: {x: number, y: number};
//     event: MouseEvent | TouchEvent;
//     distance: Point;
//     delta: {x: -1 | 0 | 1, y: -1 | 0 | 1};
//   }> = this._moveEvents.asObservable();
//
//   data: T;
//
//   constrainPosition?: (point: Point, dragRef: MyDragRef) => Point;
//
//   constructor(
//     element: ElementRef<HTMLElement> | HTMLElement,
//     private _config: DragRefConfig,
//     private _document: Document,
//     private _ngZone: NgZone,
//     private _viewportRuler: ViewportRuler,
//     private _dragDropRegistry: DragDropRegistry<MyDragRef, MyDropListRef>
//   ) {
//     this.withRootElement(element);
//     _dragDropRegistry.registerDragItem(this);
//   }
//
//   withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this {
//     const element = coerceElement(rootElement);
//
//     if (element !== this._rootElement) {
//       if (this._rootElement) {
//         this._removeRootElementListeners(this._rootElement);
//       }
//
//       this._ngZone.runOutsideAngular(() => {
//         element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
//         element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
//       });
//       this._initialTransform = undefined;
//       this._rootElement = element;
//     }
//
//     return this;
//   }
//
//
// }
//
// export type Direction = 'ltr' | 'rtl';
//
// export interface Point {
//   x: number;
//   y: number;
// }
//
// /** Template that can be used to create a drag preview element. */
// interface DragPreviewTemplate<T = any> extends DragHelperTemplate<T> {
//   matchSize?: boolean;
// }
//
// /** Template that can be used to create a drag helper element (e.g. a preview or a placeholder). */
// interface DragHelperTemplate<T = any> {
//   template: TemplateRef<T> | null;
//   viewContainer: ViewContainerRef;
//   context: T;
// }
//
// /** Object that can be used to configure the behavior of DragRef. */
// export interface DragRefConfig {
//   /**
//    * Minimum amount of pixels that the user should
//    * drag, before the CDK initiates a drag sequence.
//    */
//   dragStartThreshold: number;
//
//   /**
//    * Amount the pixels the user should drag before the CDK
//    * considers them to have changed the drag direction.
//    */
//   pointerDirectionChangeThreshold: number;
//
//   /** `z-index` for the absolutely-positioned elements that are created by the drag item. */
//   zIndex?: number;
// }
