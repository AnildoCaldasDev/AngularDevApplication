import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
    imports: [
        CommonModule,
        DatepickerRoutingModule
    ],
    declarations: [
        DatepickerComponent
    ]
})
export class DatepickerModule { }
