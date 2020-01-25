import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding.component';
import { DatabindingService } from '../services/databinding.service';

@NgModule({
  declarations: [ DatabindingComponent],
  imports: [
    CommonModule
  ],
  exports:[DatabindingComponent],
  providers:[DatabindingService]
})
export class DatabindModule { }
