import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveformsroutingModule } from './reactiveforms-routin.module';
import { ReactiveformsComponent } from './reactiveforms.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveformsroutingModule,
        BsDropdownModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        ReactiveformsComponent
    ]
})
export class ReactiveFormsExampleModule { }
