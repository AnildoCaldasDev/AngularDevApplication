import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ImpressaoqrcodeComponent } from "./impressaoqrcode.component";
import { ImpressaoqrcoderoutingModule } from "./impressaoqrcode-routing.module";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ImpressaoqrcoderoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [ImpressaoqrcodeComponent],
})
export class ImpressaoqrcodeModule {}
