import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatMessageComponent } from "./chatmessage.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Chat do usuário",
    },
    children: [
      {
        path: "",
        redirectTo: "chatmessage",
      },
      {
        path: "chatmessage",
        component: ChatMessageComponent,
        data: {
          title: "Chat do Usuário",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMessageRoutingModule {}
