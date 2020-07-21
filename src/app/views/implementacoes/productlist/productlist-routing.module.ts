import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Produtos'
    },
    children: [
      {
        path: '',
        redirectTo: 'products'
      },
      {
        path: 'products',
        component: ProductListComponent,
        data: {
          title: 'Produtos'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
