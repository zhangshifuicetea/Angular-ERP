import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss'],
})
export class CascadeSelectComponent<T> implements OnInit {
  @Input() labelKey = 'name';

  @Input()
  get dataSource(): CascadeSelectOption<T>[] { return this._dataSource; }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._dataSource = dataSource;
    }
  }
  _dataSource: CascadeSelectOption<T>[] = [];

  selectedData: CascadeSelectOption<T>;

  @Output() selectedChange = new EventEmitter<CascadeSelectOption<T>>();

  constructor(
  ) {
  }

  ngOnInit(): void {
    // this.select(this._dataSource[0]);
  }

  select(option: CascadeSelectOption<T>) {
    this.selectedData = option;
    this.selectedChange.emit(option);
  }

}

export type CascadeSelectOption<T> = T & {
  label: string;
  children?: CascadeSelectOption<T>[];
};

