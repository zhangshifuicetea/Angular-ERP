import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LayoutComponent} from './layout/layout.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { PassportComponent } from './passport/passport.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    SideNavListComponent,
    PassportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
