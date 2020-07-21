import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { CartModel } from '../../models/cart.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(private store: Store<{ cart: CartModel }>) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit(): void {
  }

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
