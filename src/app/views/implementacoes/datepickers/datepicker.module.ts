import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatepickerRoutingModule } from "./datepicker-routing.module";
import { DatepickerComponent } from "./datepicker.component";
import { NgxMyDatePickerModule } from "ngx-mydatepicker";
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerRoutingModule,
    NgxMyDatePickerModule.forRoot(),
  ],
  declarations: [DatepickerComponent],
})
export class DatepickerModule {}
