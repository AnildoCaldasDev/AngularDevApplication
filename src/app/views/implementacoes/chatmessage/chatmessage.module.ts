import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "../../../shared/shared.module";
import { ChatMessageComponent } from "./chatmessage.component";
import { ChatMessageRoutingModule } from "./chatmessage-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChatMessageRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [ChatMessageComponent],
})
export class ChatMessageModule {}
