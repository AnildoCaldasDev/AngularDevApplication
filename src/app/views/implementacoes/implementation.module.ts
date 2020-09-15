import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMyDatePickerModule } from "ngx-mydatepicker";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "../../shared/shared.module";
import { ChatMessageComponent } from "./chatmessage/chatmessage.component";
import { DashboardRealtimeComponent } from "./dashboardrealtime/dashboardrealtime.component";
import { DatepickerComponent } from "./datepickers/datepicker.component";
import { HandleFilesComponent } from "./handlingfiles/handlefiles.component";
import { ProductListComponent } from "./productlist/product-list.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";
import { DynamicFormQuestionComponent } from "./reactiveforms/dynamicquestions/dynamic-form-questions.component";
import { DynamicFormComponent } from "./reactiveforms/dynamicform/dynamic-form.component";
import { ShoppingCartComponent } from "./shoppingcart/shopping-cart.component";
import { ImplementationRoutingModule } from "./implementation-routing.module";
import { ReactiveSearchComponent } from "./reactivesearch/reactivesearch.component";
import { PcpmanagerComponent } from "./pcpmanager/pcpmanager.component";
import { PcpProductEditComponent } from "./pcpmanager/pcpproductedit.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ImplementationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    NgxMyDatePickerModule.forRoot(),
  ],
  declarations: [
    ChatMessageComponent,
    DashboardRealtimeComponent,
    DatepickerComponent,
    HandleFilesComponent,
    ProductListComponent,
    ReactiveformsComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    ShoppingCartComponent,
    ReactiveSearchComponent,
    PcpmanagerComponent,
    PcpProductEditComponent,
  ],
})
export class ImplementationModule {}
