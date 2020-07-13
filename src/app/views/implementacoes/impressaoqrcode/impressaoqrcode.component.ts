import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Line } from '../../../models/line';
import { Station } from '../../../models/station';
import { ImpressaoqrcodeService } from '../../../services/impressaoqrcode.service';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-impressaoqrcode',
  templateUrl: './impressaoqrcode.component.html',
  styleUrls: ['./impressaoqrcode.component.css']
})
export class ImpressaoqrcodeComponent implements OnInit {

  productList: Product[] = []
  lineList: Line[] = []
  stationList: Station[] = []
  categoryList: Category[] = [];
  categories$: Observable<Category[]>;

  constructor(private impressaoService: ImpressaoqrcodeService,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productList = this.impressaoService.getProductList();
    this.lineList = this.impressaoService.getLineList();
    this.stationList = this.impressaoService.getStationList();
  }

  changeDropProduct(id: number) {
    //alert(id);
    this.getCategories();
  }

  getCategories() {
    this.categoryService.list().subscribe(data => {
      this.categoryList = data;
    });


    // this.categories$ = this.categoryService.list().pipe(
    //   // map(),
    //   // tap(),
    //   // switchMap(),
    //   catchError(error => {
    //     console.error(error);
    //     // this.error$.next(true);
    //     this.handleError(error);
    //     return null;
    //   })
    // );
  }

  handleError(error) {
    //this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    console.log(error);
  }


}
