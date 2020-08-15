//implementação do dashboard de Cotações:
import { Component, OnInit } from "@angular/core";
import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from "@aspnet/signalr";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-dashboardrealtime",
  templateUrl: "./dashboardrealtime.component.html",
  styleUrls: ["./dashboardrealtime.component.css"],
})
export class DashboardRealtimeComponent implements OnInit {
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

  //`${environment.API}categories`
  //https://localhost:5001/realtimebrokerhub
  //`${environment.API}realtimebrokerhub`

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
      .withUrl(`${environment.API}realtimebrokerhub`, {
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
      .catch((error) => {
        console.log("Catch chamado!" + error);
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
