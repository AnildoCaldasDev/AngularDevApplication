import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpressaoqrcodeComponent } from './impressaoqrcode.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Impressão'
    },
    children: [
      {
        path: '',
        redirectTo: 'impressaoqrcode'
      },
      {
        path: 'impressaoqrcode',
        component: ImpressaoqrcodeComponent,
        data: {
          title: 'Impressão de QR Code'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressaoqrcoderoutingModule {}
