import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Compras'
    },
    children: [
      {
        path: '',
        redirectTo: 'shoppingcart'
      },
      {
        path: 'shoppingcart',
        component: ShoppingCartComponent,
        data: {
          title: 'Carrinho de Compras - Checkout'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
