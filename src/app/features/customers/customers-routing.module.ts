import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import {QuoteComponent} from './quote/quote.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'quote', component: QuoteComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
