import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DatepickerRoutingModule,
        NgxMyDatePickerModule.forRoot()
    ],
    declarations: [
        DatepickerComponent
    ]
})
export class DatepickerModule { }
