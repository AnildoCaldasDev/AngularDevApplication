import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardRealtimeComponent } from "./dashboardrealtime/dashboardrealtime.component";
import { ChatMessageComponent } from "./chatmessage/chatmessage.component";
import { DatepickerComponent } from "./datepickers/datepicker.component";
import { HandleFilesComponent } from "./handlingfiles/handlefiles.component";
import { ProductListComponent } from "./productlist/product-list.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";
import { ShoppingCartComponent } from "./shoppingcart/shopping-cart.component";
import { ReactiveSearchComponent } from "./reactivesearch/reactivesearch.component";
import { PcpmanagerComponent } from "./pcpmanager/pcpmanager.component";
import { PcpProductEditComponent } from "./pcpmanager/pcpproductedit.component";
import { InputandoutputComponent } from "./inputandoutput/inputandoutput.component";
import { ComponentinteractionsComponent } from "./componentinteractions/componentinteractions.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Implementacoes",
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
          title: "Dashboard Realtime",
        },
      },
      {
        path: "chatmessage",
        component: ChatMessageComponent,
        data: {
          title: "Chat do Usuário",
        },
      },
      {
        path: "datepickers",
        component: DatepickerComponent,
        data: {
          title: "Usando Date Picker",
        },
      },
      {
        path: "uploadfiles",
        component: HandleFilesComponent,
        data: {
          title: "Tela de Upload de Files",
        },
      },
      {
        path: "products",
        component: ProductListComponent,
        data: {
          title: "Produtos",
        },
      },
      {
        path: "reactiveforms",
        component: ReactiveformsComponent,
        data: {
          title: "Impressão de QR Code",
        },
      },
      {
        path: "shoppingcart",
        component: ShoppingCartComponent,
        data: {
          title: "Carrinho de Compras - Checkout",
        },
      },
      {
        path: "reactivesearch",
        component: ReactiveSearchComponent,
        data: {
          title: "Pesquisa Reativa",
        },
      },
      {
        path: "pcpmanager",
        component: PcpmanagerComponent,
        data: {
          title: "PCP Produtos",
        },
      },
      {
        path: "pcpmanageredit",
        component: PcpProductEditComponent,
        data: {
          title: "PCP Produtos - Novo",
        },
      },
      {
        path: "inputandoutput",
        component: InputandoutputComponent,
        data: {
          title: "Input and Output",
        },
      },
      {
        path: "componentinteractions",
        component: ComponentinteractionsComponent,
        data: {
          title: "Component Interactions",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImplementationRoutingModule {}
