// import { Component, OnInit } from "@angular/core";
// import { Product } from "../../../models/product";
// import { Line } from "../../../models/line";
// import { Station } from "../../../models/station";
// import { ImpressaoqrcodeService } from "../../../services/impressaoqrcode.service";
// import { Category } from "../../../models/category";
// import { CategoryService } from "../../../services/category.service";
// import { Observable } from "rxjs";
// import { catchError } from "rxjs/operators";

// @Component({
//   selector: "app-impressaoqrcode",
//   templateUrl: "./impressaoqrcode.component.html",
//   styleUrls: ["./impressaoqrcode.component.css"],
// })
// export class ImpressaoqrcodeComponent implements OnInit {
//   productList: Product[] = [];
//   lineList: Line[] = [];
//   stationList: Station[] = [];
//   categoryList: Category[] = [];
//   categories$: Observable<Category[]>;

//   constructor(
//     private impressaoService: ImpressaoqrcodeService,
//     private categoryService: CategoryService
//   ) {}

//   ngOnInit(): void {
//     this.productList = this.impressaoService.getProductList();
//     this.lineList = this.impressaoService.getLineList();
//     this.stationList = this.impressaoService.getStationList();
//   }

//   changeDropProduct() {
//     //alert(id);
//     this.getCategories();
//   }

//   getCategories() {
//     this.categoryService.list().subscribe((data) => {
//       this.categoryList = data;
//     });

//     // this.categories$ = this.categoryService.list().pipe(
//     //   // map(),
//     //   // tap(),
//     //   // switchMap(),
//     //   catchError(error => {
//     //     console.error(error);
//     //     // this.error$.next(true);
//     //     this.handleError(error);
//     //     return null;
//     //   })
//     // );
//   }

//   handleError(error) {
//     //this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
//     console.log(error);
//   }
// }

//implementação do dashboard de Cotações:
import { Component, OnInit } from "@angular/core";
import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from "@aspnet/signalr";

@Component({
  selector: "app-impressaoqrcode",
  templateUrl: "./impressaoqrcode.component.html",
  styleUrls: ["./impressaoqrcode.component.css"],
})
export class ImpressaoqrcodeComponent implements OnInit {
  dictStocks = {
    ITSA4: {
      startValue: 20.0,
      currentvalue: 20.0,
      change: 0,
    },
    TAEE11: {
      startValue: 20.0,
      currentvalue: 20.0,
      change: 0,
    },
    PETR4: {
      startValue: 20.0,
      currentvalue: 20.0,
      change: 0,
    },
  };

  stockMessageAlert: string = "";
  messsageAlert: string = "";

  private _hubConnection: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  ngOnInit(): void {}

  connectToStock(symbol: string) {
    this._hubConnection.invoke("ConnectToStock", symbol);
  }

  //Tive problema com cors e erro de undefined do hub connectio. Usei conigurações:
  //https://stackoverflow.com/questions/52086158/angular-signalr-error-failed-to-complete-negotiation-with-the-server
  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/realtimebrokerhub", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        for (let key in this.dictStocks) {
          this.connectToStock(key);
        }
      })
      .catch(() => {
        console.log("Catch chamado!");
        setTimeout(this.startConnection, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on("UpdatePrice", (data: any) => {
      let item = this.dictStocks[data.symbol];
      item.currentValue = data.price;
      item.change = (item.currentValue - item.startValue) / item.startValue;
    });

    this._hubConnection.on("AlertNotification", (data: any) => {
      this.stockMessageAlert = data.stock;
      this.messsageAlert = data.message;
    });

    this._hubConnection.on("ClearNotification", (data: any) => {
      this.messsageAlert = "";
      this.stockMessageAlert = "";
    });
  }
}
