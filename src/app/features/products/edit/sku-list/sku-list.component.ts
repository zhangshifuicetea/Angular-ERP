import {Component, OnInit} from '@angular/core';
import {attributes} from '../../../../core/data/inmemory-data/products';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.scss']
})
export class SkuListComponent implements OnInit {
  attributes = attributes;
  selectedAttrs: string[] = [];
  attributeValues: AttributeValues[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    this.selectedAttrs = ['颜色', '工艺'];
    this.attributeValues = [{type: '颜色', values: ['蓝色', '橙色']}, {type: '工艺', values: ['锻造', '3D打印']}];
  }

  attributesChange(attrs: string[]) {
    this.selectedAttrs = attrs || [];
    this.attributeValues = this.selectedAttrs.map((attr) => {
      const oldAttrValues = this.attributeValues.find(av => av.type === attr);
      return {
        type: attr,
        values: oldAttrValues?.values || [],
      };
    });
  }

  addChip(attr: AttributeValues, event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      attr.values.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  removeChip(attr: AttributeValues, value: string): void {
    attr.values = attr.values.filter(v => v !== value);
  }

}

interface AttributeValues {
  type: string;
  values: string[];
}

// [
//  [{type: 'a', value: 111}, {type: 'a', value: 222}],
//  [{type: 'b', value: 999}, {type: 'b', value: 666}],
// ]
