import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AttributeValues, Product, ProductSku} from '../../../core/data/inmemory-data/products';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productImages: string[] = [];
  selectedImageIndex = 0;
  attributes: AttributeValues[];
  selectedSku: ProductSku;

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) { }

  ngOnInit(): void {
    this.productImages = this.product.skuList.map(s => s.image);
    this.attributes = this.product.attributes;
  }

  selectSku(attr: AttributeValues, val: string) {
    // console.log(attr, val);
    attr.selectedValue = val;
    const skuValues = (this.attributes || []).map(a => a.selectedValue).join(',');
    const sku = this.product.skuList.find(s => s.attributeValues === skuValues);
    if (sku) {
      this.selectedSku = sku;
      this.selectedImageIndex = this.productImages.findIndex(image => image === sku.image);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
