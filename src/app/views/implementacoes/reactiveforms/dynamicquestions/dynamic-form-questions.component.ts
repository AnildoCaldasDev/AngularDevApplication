import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../model/question-base';

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-questions.component.html',
    styleUrls: ['../reactiveforms.component.css'],
})
export class DynamicFormQuestionComponent {

    // formGroup = new FormGroup({
    // });

    @Input() question: QuestionBase<string>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }

}