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
        name: 'Impressão',
        url: '/implementacoes/impressaoqrcode',
        icon: 'icon-drawer'
      }
    ]
  }
];
