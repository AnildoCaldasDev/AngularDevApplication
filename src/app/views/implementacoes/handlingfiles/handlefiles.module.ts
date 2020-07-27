import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { HandleFilesRoutingModule } from "./handlefiles-routing.module";
import { HandleFilesComponent } from "./handlefiles.component";
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HandleFilesRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [HandleFilesComponent],
})
export class HandleFilesModule {}
