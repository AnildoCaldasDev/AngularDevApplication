import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../../models/cart.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Remove, Clear } from '../../../actions/cart.action';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(private store: Store<{ cart: CartModel }>, private toastr: ToastrService) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit(): void {
  }

  remove(product) {
    this.store.dispatch(Remove(product))
  }

  reset() {
    this.store.dispatch(Clear());
  }


  confirmRemove(product) {
    if (confirm("Deseja realmente excluir este produto?")) {
      this.remove(product)
    }
  }



}
