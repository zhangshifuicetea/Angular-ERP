import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExceptionRoutingModule} from './exception-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ExceptionRoutingModule
  ]
})
export class ExceptionModule {
}
