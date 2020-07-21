import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ShoppingCartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
