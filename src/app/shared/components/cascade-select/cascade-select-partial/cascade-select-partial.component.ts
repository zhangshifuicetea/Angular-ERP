import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CascadeSelectComponent, CascadeSelectOption} from '../cascade-select.component';

@Component({
  selector: 'app-cascade-select-partial',
  templateUrl: './cascade-select-partial.component.html',
  styleUrls: ['./cascade-select-partial.component.scss']
})
export class CascadeSelectPartialComponent<T> implements OnInit {
  @Input() labelKey: string;
  @Input() label: string;
  @Input() options: CascadeSelectOption<T>[] = [];

  selectedOption: CascadeSelectOption<T>;

  @ViewChild(CascadeSelectPartialComponent) subSelect: CascadeSelectPartialComponent<T>;

  constructor(
    private rootCascadeSelect: CascadeSelectComponent<T>,
  ) { }

  ngOnInit(): void {
  }

  select(option: CascadeSelectOption<T>) {
    this.selectedOption = option;
    this.rootCascadeSelect.select(option);
    if (this.subSelect) {
      this.subSelect.clear();
    }
  }

  clear() {
    this.selectedOption = undefined;
  }

}
