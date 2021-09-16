import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTypeComponent } from './product-types/product-type.component';
import { ProductComponent } from './products/product.component';
import { ProductsResolverService } from './resolvers/products-resolver.component';

const routes: Routes = [
  { path: 'productTypes', component: ProductTypeComponent },
  { path: 'products', component: ProductComponent, resolve: { products: ProductsResolverService }},
  { path: '', pathMatch: 'full', redirectTo: '/productTypes' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
