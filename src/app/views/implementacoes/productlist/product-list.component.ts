import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { CartModel } from '../../../models/cart.model';
import { DataService } from '../../../services/data.service';
import { ProductModel } from '../../../models/product.model';
import { Add } from '../../../actions/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[] = null;

  constructor(private toastr: ToastrService, private store: Store<CartModel>, private service: DataService) { }

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe((data) => { this.products = data; });
  }


  async add(product) {

    try {

      this.store.dispatch(Add(product));
      this.toastr.success(`${product.title} adicionado ao carrinho`, "Item Adicionado");

    } catch (err) {
      this.toastr.error(`${product.title} não foi adicionado ao carrinho`, "Erro ao Adicionar Produto");
    }
  }
}
