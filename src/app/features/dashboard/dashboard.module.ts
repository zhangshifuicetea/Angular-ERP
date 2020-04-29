import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TestChildComponent } from './test-child/test-child.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestChildComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
    ]
})
export class DashboardModule { }
