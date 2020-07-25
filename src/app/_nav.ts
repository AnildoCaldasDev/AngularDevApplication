import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Implementações',
    url: '/implementacoes',
    icon: 'icon-options-vertical',
    children: [
      {
        name: 'Impressão QRCode',
        url: '/implementacoes/impressaoqrcode',
        icon: 'icon-drawer'
      },
      {
        name: 'DatePicker',
        url: '/implementacoes/usingdatepicker',
        icon: 'icon-calendar'
      },
      {
        name: 'Reactive Forms',
        url: '/implementacoes/reactiveforms',
        icon: 'icon-notebook'
      },
      {
        name: 'Redux Products',
        url: '/implementacoes/products',
        icon: 'icon-notebook'
      },
      {
        name: 'Upload Files',
        url: '/implementacoes/uploadfiles',
        icon: 'icon-cloud-upload'
      }
    ]
  }
];
