import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {MaintainComponent} from './maintain/maintain.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'maintain', component: MaintainComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
