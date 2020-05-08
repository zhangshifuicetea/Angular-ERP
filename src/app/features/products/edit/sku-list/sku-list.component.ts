import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  attributes,
  AttributeValuePair,
  AttributeValues,
  ProductSku
} from '../../../../core/data/inmemory-data/products';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.scss']
})
export class SkuListComponent implements OnInit, AfterViewInit {
  skuCode = 'ANlcd';
  attributes = attributes;
  selectedAttrs: string[] = [];
  displayedColumns: string[] = ['skuCode', 'price'];
  attributeValues: AttributeValues[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skuAttributes: AttributeValuePair[][] = [];
  skuList: ProductSku[] = [];

  @ViewChild(MatTable) skuTable: MatTable<any>;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedAttrs = ['颜色', '工艺'];
    this.attributeValues = [{type: '颜色', values: ['蓝色', '橙色']}, {type: '工艺', values: ['锻造', '3D打印']}];
    this.genSkuAttributes();
  }

  ngAfterViewInit(): void {
    console.log(this.skuTable, 'table');
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
      const values = (attr.values || []).concat(value.trim());
      attr.values = Array.from(new Set(values));
    }
    if (input) {
      input.value = '';
    }
    this.genSkuAttributes();
  }

  removeChip(attr: AttributeValues, value: string): void {
    attr.values = attr.values.filter(v => v !== value);
    this.genSkuAttributes();
  }

  genSkuAttributes() {
    // [[{type: aa, value: 11}, {type: aa, value: 22}], [...]...]
    const source: { type: string, value: string }[][] = this.attributeValues.map((attributeValues) => {
      return attributeValues.values.map(val => ({type: attributeValues.type, value: val}));
    }).filter(line => line && line.length > 0);
    this.skuAttributes = calCartesianProduct(source);
    console.log(this.skuAttributes, 'skuattrs');
    if (this.skuAttributes && this.skuAttributes.length > 0) {
      this.genSkuList();
    }
  }

  genSkuList() {
    const skuAttributes = this.skuAttributes.map((attributeValues) => {
      return attributeValues.map(attrValue => Object.assign({}, attrValue));
    });
    const skus: ProductSku[] = skuAttributes.map((skuAttrs, index) => {
      const attrsValues = skuAttrs.map(attr => attr.value).join(',');
      return {
        skuCode: `${this.skuCode}-${index + 1}`,
        attributes: skuAttrs,
        attributeValues: attrsValues,
        price: 0,
      };
    });
    const oldSkus = this.skuList;
    skus.forEach((sku) => {
      const old = oldSkus.find(s => sku.attributeValues.includes(s.attributeValues));
      if (old) {
        sku.price = old.price;
      }
    });
    this.skuList = skus;
    this.displayedColumns = ['skuCode', ...this.selectedAttrs, 'price'];
    console.log(skus, 'skus');
  }

}

function calCartesianProduct(source: AttributeValuePair[][]): AttributeValuePair[][] {
  if (source.length < 2) {
    // @ts-ignore
    return (source[0] || []).map(item => [item]);
  } else {
    // @ts-ignore
    return source.reduce((acc, curr) => {
      const result: AttributeValuePair[][] = [];
      acc.forEach((prev) => {
        curr.forEach((after) => {
          const prevArr: AttributeValuePair[] = Array.isArray(prev) ? prev : [prev];
          result.push(prevArr.concat(after));
        });
      });
      return result;
    });
  }

}

// [
//  [{type: 'a', value: 111}, {type: 'a', value: 222}],
//  [{type: 'b', value: 999}, {type: 'b', value: 666}],
//  [{type: 'c', value: 333}, {type: 'c', value: 777}],
// ]

// [
// [
//  [{type: 'a', value: 111}, {type: 'b', value: 999}],
//  [{type: 'a', value: 111}, {type: 'b', value: 666}],
//  [{type: 'a', value: 222}, {type: 'b', value: 999}],
//  [{type: 'a', value: 222}, {type: 'b', value: 666}],
// ]
//  [{type: 'c', value: 333}, {type: 'c', value: 777}],
// ]
