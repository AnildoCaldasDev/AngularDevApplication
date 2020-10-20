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
import { AuthGuard } from "../../guards/auth.guard";
import { BibliotecarxjsexemplosComponent } from "./bibliotecarxjsexemplos/bibliotecarxjsexemplos.component";

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
        canActivate: [AuthGuard],
      },
      {
        path: "dashboardrealtime",
        component: DashboardRealtimeComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Dashboard Realtime",
        },
      },
      {
        path: "chatmessage",
        component: ChatMessageComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Chat do Usuário",
        },
      },
      {
        path: "datepickers",
        component: DatepickerComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Usando Date Picker",
        },
      },
      {
        path: "uploadfiles",
        component: HandleFilesComponent,
        canActivate: [AuthGuard],
        //https://angular.io/api/router/CanActivate
        //https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
        data: {
          title: "Tela de Upload de Files",
        },
      },
      {
        path: "products",
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Produtos",
        },
      },
      {
        path: "reactiveforms",
        component: ReactiveformsComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Impressão de QR Code",
        },
      },
      {
        path: "shoppingcart",
        component: ShoppingCartComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Carrinho de Compras - Checkout",
        },
      },
      {
        path: "reactivesearch",
        component: ReactiveSearchComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Pesquisa Reativa",
        },
      },
      {
        path: "pcpmanager",
        component: PcpmanagerComponent,
        canActivate: [AuthGuard],
        data: {
          title: "PCP Produtos",
        },
      },
      {
        path: "pcpmanageredit",
        component: PcpProductEditComponent,
        canActivate: [AuthGuard],
        data: {
          title: "PCP Produtos - Novo",
        },
      },
      {
        path: "inputandoutput",
        component: InputandoutputComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Input and Output",
        },
      },
      {
        path: "componentinteractions",
        component: ComponentinteractionsComponent,
        canActivate: [AuthGuard],
        data: {
          title: "Component Interactions",
        },
      },
      {
        path: "bibliotecarxjsexemplos",
        component: BibliotecarxjsexemplosComponent,
        canActivate: [AuthGuard],
        data: {
          title: "TudoSobre RxJS",
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
