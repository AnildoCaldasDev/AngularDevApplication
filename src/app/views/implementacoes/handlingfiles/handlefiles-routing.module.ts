import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HandleFilesComponent } from "./handlefiles.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Upload Files",
    },
    children: [
      {
        path: "",
        redirectTo: "uploadfiles",
      },
      {
        path: "uploadfiles",
        component: HandleFilesComponent,
        data: {
          title: "Tela de Upload de Files",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandleFilesRoutingModule {}
