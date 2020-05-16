import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImpressaoqrcodeComponent } from './impressaoqrcode.component';
import { ImpressaoqrcoderoutingModule } from './impressaoqrcode-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ImpressaoqrcoderoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    ImpressaoqrcodeComponent
  ]
})
export class ImpressaoqrcodeModule { }
