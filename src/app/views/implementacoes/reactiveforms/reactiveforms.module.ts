import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveformsroutingModule } from './reactiveforms-routin.module';
import { ReactiveformsComponent } from './reactiveforms.component';
import { DynamicFormQuestionComponent } from './dynamicquestions/dynamic-form-questions.component';
import { DynamicFormComponent } from './dynamicform/dynamic-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveformsroutingModule,
        BsDropdownModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        ReactiveformsComponent,
        DynamicFormQuestionComponent,
        DynamicFormComponent
    ]
})
export class ReactiveFormsExampleModule { }
