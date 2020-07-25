import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UploadFilesRoutingModule } from './uploadfiles-routing.module';
import { UploadfilesComponent } from './uploadfiles.component';

@NgModule({
  imports: [
    CommonModule,
    UploadFilesRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    UploadfilesComponent
  ]
})
export class UploadFilesModule { }
