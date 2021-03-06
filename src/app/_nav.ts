import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },
  //menus disposto sem pai na arvore:
  {
    name: "Dashboar RealTime",
    url: "/implementacoes/dashboardrealtime",
    icon: "icon-drawer",
  },
  {
    name: "DatePicker",
    url: "/implementacoes/datepickers",
    icon: "icon-calendar",
  },
  {
    name: "Reactive Forms",
    url: "/implementacoes/reactiveforms",
    icon: "icon-notebook",
  },
  {
    name: "Redux Products",
    url: "/implementacoes/products",
    icon: "icon-notebook",
  },
  {
    name: "Handling Files",
    url: "/implementacoes/uploadfiles",
    icon: "icon-cloud-upload",
  },
  {
    name: "Chat Message",
    url: "/implementacoes/chatmessage",
    icon: "icon-bubbles",
  },
  {
    name: "Reactive Search",
    url: "/implementacoes/reactivesearch",
    icon: "icon-magnifier",
  },
  {
    name: "PCP Manager",
    url: "/implementacoes/pcpmanager",
    icon: "icon-magnifier",
  },
  {
    name: "Input x Output",
    url: "/implementacoes/inputandoutput",
    icon: "icon-share-alt",
  },
  {
    name: "Comp Interactions",
    url: "/implementacoes/componentinteractions",
    icon: "icon-paper-plane",
  },
  {
    name: "RxJS Exemplos",
    url: "/implementacoes/bibliotecarxjsexemplos",
    icon: "icon-paper-plane",
  },
  {
    name: "Observables Conceitos",
    url: "/implementacoes/observablesconcepts",
    icon: "icon-paper-plane",
  },
  //menus dispostos com pai e filhos na arore:
  // {
  //   name: "Implementações",
  //   url: "/implementacoes",
  //   icon: "icon-options-vertical",
  //   children: [
  //     {
  //       name: "Dashboard Realtime",
  //       url: "/implementacoes/dashboardrealtime",
  //       icon: "icon-drawer",
  //     },
  //     {
  //       name: "DatePicker",
  //       url: "/implementacoes/datepickers",
  //       icon: "icon-calendar",
  //     },
  //     {
  //       name: "Reactive Forms",
  //       url: "/implementacoes/reactiveforms",
  //       icon: "icon-notebook",
  //     },
  //     {
  //       name: "Redux Products",
  //       url: "/implementacoes/products",
  //       icon: "icon-notebook",
  //     },
  //     {
  //       name: "Upload Files",
  //       url: "/implementacoes/uploadfiles",
  //       icon: "icon-cloud-upload",
  //     },
  //     {
  //       name: "Chat Message",
  //       url: "/implementacoes/chatmessage",
  //       icon: "icon-bubbles",
  //     },
  //   ],
  // },
];
