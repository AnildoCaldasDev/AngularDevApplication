import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImpressaoqrcodeComponent } from './impressaoqrcode.component';
import { ImpressaoqrcoderoutingModule } from './impressaoqrcode-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImpressaoqrcoderoutingModule
  ],
  declarations: [
    ImpressaoqrcodeComponent
  ]
})
export class ImpressaoqrcodeModule { }
