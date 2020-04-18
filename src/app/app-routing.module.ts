import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)},
  {path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)},
  {path: 'exception', loadChildren: () => import('./features/exception/exception.module').then(m => m.ExceptionModule)},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/exception/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
