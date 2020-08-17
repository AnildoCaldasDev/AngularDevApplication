import { Component, OnInit, EventEmitter, NgZone } from "@angular/core";
import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from "@aspnet/signalr";
import { MessageModel } from "../../../models/messagemodel";
import { environment } from "../../../../environments/environment";
import { ChatService } from "../../../services/chat.service";

@Component({
  selector: "app-chatmessage",
  templateUrl: "./chatmessage.component.html",
})
export class ChatMessageComponent implements OnInit {
  title = "ClientApp";
  txtMessage: string = "";
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<MessageModel>();
  message = new MessageModel();

  constructor(private chatService: ChatService, private _ngZone: NgZone) {
    this.subscribeToEvents();
  }

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.txtMessage) {
      this.message = new MessageModel();
      this.message.clientuniqueid = this.uniqueID;
      this.message.type = "sent";
      this.message.messageDesc = this.txtMessage;
      this.message.date = new Date();
      this.messages.push(this.message);
      this.chatService.sendMessage(this.message);
      this.txtMessage = "";
    }
  }

  private subscribeToEvents(): void {
    this.chatService.messageReceived.subscribe((message: MessageModel) => {
      this._ngZone.run(() => {
        if (message.clientuniqueid !== this.uniqueID) {
          message.type = "received";
          console.log(message);
          this.messages.push(message);
        }
      });
    });
  }
}
