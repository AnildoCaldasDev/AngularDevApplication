import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Line } from '../models/line';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class ImpressaoqrcodeService {

  constructor() { }

  getProductList(): Product[] {

    var prod0: Product = { id: 0, name: "Select" }
    var prod1: Product = { id: 1, name: "D10" }
    var prod2: Product = { id: 2, name: "D20" }
    var prod3: Product = { id: 3, name: "N74" }
    var prod4: Product = { id: 4, name: "N70" }
    var prod5: Product = { id: 5, name: "N80" }

    var prodList: Product[] = [];

    prodList.push(prod0);
    prodList.push(prod1);
    prodList.push(prod2);
    prodList.push(prod3);
    prodList.push(prod4);
    prodList.push(prod5);

    return prodList;
  }

  getLineList(): Line[] {

    var line0: Line = { id: 0, name: "Select" }
    var line1: Line = { id: 1, name: "Pre-Line" }
    var line2: Line = { id: 2, name: "FATP" }
    var line3: Line = { id: 3, name: "MLB" }
    var line4: Line = { id: 4, name: "Failure Analisys" }
    var line5: Line = { id: 5, name: "QA-Teste" }

    var lineList: Line[] = [];

    lineList.push(line0);
    lineList.push(line1);
    lineList.push(line2);
    lineList.push(line3);
    lineList.push(line4);
    lineList.push(line5);

    return lineList;
  }

  getStationList(): Station[] {

    var station0: Station = { id: 0, name: "Select" }
    var station1: Station = { id: 1, name: "ST00011200" }
    var station2: Station = { id: 2, name: "ST00453200" }
    var station3: Station = { id: 3, name: "ST02353430" }
    var station4: Station = { id: 4, name: "ST04454350" }
    var station5: Station = { id: 5, name: "ST00053340" }

    var stationList: Station[] = [];

    stationList.push(station0);
    stationList.push(station1);
    stationList.push(station2);
    stationList.push(station3);
    stationList.push(station4);
    stationList.push(station5);

    return stationList }
}
