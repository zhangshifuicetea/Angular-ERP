import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../shared/shared.module';
import { QuoteComponent } from './quote/quote.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [CustomersComponent, QuoteComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    DragDropModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
