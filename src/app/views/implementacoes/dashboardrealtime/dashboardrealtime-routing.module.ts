import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardRealtimeComponent } from "./dashboardrealtime.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Impressão",
    },
    children: [
      {
        path: "",
        redirectTo: "dashboardrealtime",
      },
      {
        path: "dashboardrealtime",
        component: DashboardRealtimeComponent,
        data: {
          title: "Impressão de QR Code",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardrealtimeroutingModule {}
