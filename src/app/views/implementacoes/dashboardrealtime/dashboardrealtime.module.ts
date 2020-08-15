import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { DashboardRealtimeComponent } from "./dashboardrealtime.component";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "../../../shared/shared.module";
import { DashboardrealtimeroutingModule } from "./dashboardrealtime-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardrealtimeroutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [DashboardRealtimeComponent],
})
export class DashboardRealtimeModule {}
