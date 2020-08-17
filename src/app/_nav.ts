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
  {
    name: "Implementações",
    url: "/implementacoes",
    icon: "icon-options-vertical",
    children: [
      {
        name: "Dashboard Realtime",
        url: "/implementacoes/dashboardrealtime",
        icon: "icon-drawer",
      },
      {
        name: "DatePicker",
        url: "/implementacoes/usingdatepicker",
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
        name: "Upload Files",
        url: "/implementacoes/uploadfiles",
        icon: "icon-cloud-upload",
      },
      {
        name: "Chat Message",
        url: "/implementacoes/chatmessage",
        icon: "icon-bubbles",
      },
    ],
  },
];
