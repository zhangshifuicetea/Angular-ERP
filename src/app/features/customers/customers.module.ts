import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [CustomersComponent],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        FlexModule
    ]
})
export class CustomersModule { }
