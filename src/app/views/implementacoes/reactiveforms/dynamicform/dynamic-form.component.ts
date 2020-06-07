import { Component, OnInit, Input } from "@angular/core";
import { QuestionControlService } from '../../../../services/question-control.service';
import { QuestionBase } from '../model/question-base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    // formGroup = new FormGroup({
    // });

    @Input() questions: QuestionBase<string>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }


}