import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './productlist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductListModule { }
