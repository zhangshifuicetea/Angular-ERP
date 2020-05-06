import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MaintainComponent } from './maintain/maintain.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    ProductsComponent,
    MaintainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FlexLayoutModule
  ]
})
export class ProductsModule { }
