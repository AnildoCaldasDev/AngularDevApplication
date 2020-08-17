import { Injectable, EventEmitter } from "@angular/core";
import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from "@aspnet/signalr";
import { MessageModel } from "../models/messagemodel";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  messageReceived = new EventEmitter<MessageModel>();
  connectionEstablished = new EventEmitter<Boolean>();

  private _hubConnection: HubConnection;
  private connectionIsEstableshid = false;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.API}chatmessagehub`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstableshid = true;
        this.connectionEstablished.emit(true);
        console.log("Hub connection started");
      })
      .catch((err) => {
        console.log("Error while establishing connection, retrying...");
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on("MessageReceived", (data: any) => {
      this.messageReceived.emit(data);
    });
  }

  sendMessage(message: MessageModel) {
    this._hubConnection.invoke("NewMessage", message);
  }
}
