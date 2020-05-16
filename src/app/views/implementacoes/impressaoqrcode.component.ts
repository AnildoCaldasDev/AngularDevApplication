import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Line } from '../../models/line';
import { Station } from '../../models/station';
import { ImpressaoqrcodeService } from '../../services/impressaoqrcode.service';

@Component({
  selector: 'app-impressaoqrcode',
  templateUrl: './impressaoqrcode.component.html',
  styleUrls: ['./impressaoqrcode.component.css']
})
export class ImpressaoqrcodeComponent implements OnInit {

  productList: Product[] = []
  lineList: Line[] = []
  stationList: Station[] = []

  constructor(private impressaoService : ImpressaoqrcodeService) { 
  }

  ngOnInit(): void {
    this.productList = this.impressaoService.getProductList();
    this.lineList = this.impressaoService.getLineList();
    this.stationList = this.impressaoService.getStationList();
  }

  changeDropProduct(id : number){
    alert(id);
  }


}
