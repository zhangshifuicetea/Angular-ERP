import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout/layout.component';
import {DashboardComponent} from './features/dashboard/dashboard/dashboard.component';
import {AuthGuard} from './core/auth.guard';
import {PassportComponent} from './layout/passport/passport.component';
import {LoginComponent} from './features/passport/login/login.component';
import {RegisterComponent} from './features/passport/register/register.component';
import {RegisterResultComponent} from './features/passport/register-result/register-result.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)},
      {path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)},
      {path: 'projects', loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule)},
      {path: 'exception', loadChildren: () => import('./features/exception/exception.module').then(m => m.ExceptionModule)},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {path: 'login', component: LoginComponent, data: {title: '登录'}},
      {path: 'register', component: RegisterComponent, data: {title: '注册'}},
      {path: 'register-result', component: RegisterResultComponent, data: {title: '注册结果'}},
    ]
  },
  {path: '**', redirectTo: '/exception/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
