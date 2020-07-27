import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "base",
        loadChildren: () =>
          import("./views/base/base.module").then((m) => m.BaseModule),
      },
      {
        path: "buttons",
        loadChildren: () =>
          import("./views/buttons/buttons.module").then((m) => m.ButtonsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/chartjs/chartjs.module").then((m) => m.ChartJSModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "implementacoes",
        loadChildren: () =>
          import(
            "./views/implementacoes/impressaoqrcode/impressaoqrcode.module"
          ).then((m) => m.ImpressaoqrcodeModule),
      },
      {
        path: "implementacoes",
        loadChildren: () =>
          import("./views/implementacoes/datepickers/datepicker.module").then(
            (m) => m.DatepickerModule
          ),
      },
      {
        path: "implementacoes",
        //LEMBRAR QUE ESTE PATH É DO CAMINHO DO ARQUIVO:
        loadChildren: () =>
          import(
            "./views/implementacoes/reactiveforms/reactiveforms.module"
          ).then((m) => m.ReactiveFormsExampleModule),
      },
      {
        path: "implementacoes",
        //LEMBRAR QUE ESTE PATH É DO CAMINHO DO ARQUIVO:
        loadChildren: () =>
          import("./views/implementacoes/productlist/productlist.module").then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: "implementacoes",
        //LEMBRAR QUE ESTE PATH É DO CAMINHO DO ARQUIVO:
        loadChildren: () =>
          import(
            "./views/implementacoes/shoppingcart/shoppingcart.module"
          ).then((m) => m.ShoppingCartModule),
      },
      {
        path: "implementacoes",
        //LEMBRAR QUE ESTE PATH É DO CAMINHO DO ARQUIVO:
        loadChildren: () =>
          import(
            "./views/implementacoes/handlingfiles/handlefiles.module"
          ).then((m) => m.HandleFilesModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
