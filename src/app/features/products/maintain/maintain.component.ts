import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/data/products.service';
import {Product} from '../../../core/data/inmemory-data/products';
import {MatDialog} from '@angular/material/dialog';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {
  products: Product[] = [];
  cascade = [
    {
      key: '一级类目a', val: 'bbb111',
      children: [
        {
          key: '二级类目c', val: 'eee111',
          children: [
            {key: '三级类目e', val: 'fff111'},
            {key: '三级类目f', val: 'ggg111'},
          ]
        },
        {key: '二级类目d', val: 'ddd111'},
      ]
    },
    {key: '一级类目b', val: 'aaa111'},

  ];

  constructor(
    private productService: ProductsService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  log(msg: any) {
    window.console.log(msg);
  }

  openProductDetail(product: Product) {
    const dialogRef = this.dialog.open(DetailComponent, {
      maxWidth: '800px',
      data: product
    });

  }


}
