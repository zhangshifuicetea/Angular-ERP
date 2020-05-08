import { Pipe, PipeTransform } from '@angular/core';
import {ProductSku} from './sku-list.component';

@Pipe({
  name: 'skuTableAttrValue'
})
export class SkuTableAttrValuePipe implements PipeTransform {

  transform(value: ProductSku, attrType: string): string {
    const attributes = value.attributes || [];
    const target = attributes.find(a => a.type === attrType);
    return target && target.value;
  }

}
