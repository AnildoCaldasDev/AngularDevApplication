import { Component, OnInit } from '@angular/core';
import { PcpManagerService } from '../../../services/pcpmanager.service';

@Component({
  selector: 'app-observableindex',
  templateUrl: './observableindex.component.html'
})
export class ObservableindexComponent implements OnInit {

  public productsList = [];

  constructor(private productsService: PcpManagerService) { }

  ngOnInit(): void {

  }

  getProducts() {
    this.productsService.getAllCustom().subscribe(
      (res: any) => {
        if (res) {
          this.productsList = res;
        }
      },
      (err) => {
        console.log("Erro ao incluir", err);
      }
    );
  }


}
