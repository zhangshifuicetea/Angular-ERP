import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MaintainComponent } from './maintain/maintain.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditComponent } from './edit/edit.component';
import { SkuListComponent } from './edit/sku-list/sku-list.component';
import { SkuTableAttrValuePipe } from './edit/sku-list/sku-table-attr-value.pipe';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MaintainComponent,
    EditComponent,
    SkuListComponent,
    SkuTableAttrValuePipe,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    DetailComponent,
  ]
})
export class ProductsModule { }
