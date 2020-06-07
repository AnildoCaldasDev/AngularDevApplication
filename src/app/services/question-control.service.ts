import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../views/implementacoes/reactiveforms/model/question-base';
import { DropdownQuestion } from '../views/implementacoes/reactiveforms/model/dropdown-question';
import { TextboxQuestion } from '../views/implementacoes/reactiveforms/model/textbox-question';
import { of } from 'rxjs';

@Injectable()
export class QuestionControlService {

    constructor() { }

    questionsSource: QuestionBase<string>[] = [

        new TextboxQuestion({
            key: 'username',
            label: 'Qual Seu Nome?',
            value: '',
            required: true,
            order: 1
        }),

        new TextboxQuestion({
            key: 'emailAddress',
            label: 'Qual o seu email?',
            type: 'email',
            required: true,
            order: 2
        }),

        new TextboxQuestion({
            key: 'personsidebus',
            label: 'Qual o nome da pessoa que senta proxima a você no ônibus?',
            required: true,
            order: 3
        }),
        new DropdownQuestion({
            key: 'casesituation',
            label: 'Qual a situação Inicial do caso?',
            options: [
                { key: null, value: 'Selecione' },
                { key: '1', value: 'Suspeito' },
                { key: '2', value: 'Liberado' },
                { key: '3', value: 'Confirmado' }
            ],
            required: true,
            order: 4
        }),
        new TextboxQuestion({
            key: 'otherssymptons',
            label: 'Quais outros sintomas? ',
            required: false,
            order: 5
        }),
    ];

    toFormGroup(questions: QuestionBase<string>[]) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }


    addQuestion() {

        console.log('antes', this.questionsSource);

        var newQuestion = new TextboxQuestion({
            key: 'newQuestion',
            label: 'Deseja criar umanova questão?',
            value: '',
            required: true,
            order: 6
        });

        this.questionsSource.push(newQuestion);

        console.log('depois', this.questionsSource);
    }


    // TODO: get from a remote source of question metadata
    getQuestions() {

        console.log('called');

        // this.questionsSource = [

        //     new TextboxQuestion({
        //         key: 'username',
        //         label: 'Qual Seu Nome?',
        //         value: '',
        //         required: true,
        //         order: 1
        //     }),

        //     new TextboxQuestion({
        //         key: 'emailAddress',
        //         label: 'Qual o seu email?',
        //         type: 'email',
        //         required: true,
        //         order: 2
        //     }),

        //     new TextboxQuestion({
        //         key: 'personsidebus',
        //         label: 'Qual o nome da pessoa que senta proxima a você no ônibus?',
        //         required: true,
        //         order: 3
        //     }),
        //     new DropdownQuestion({
        //         key: 'casesituation',
        //         label: 'Qual a situação Inicial do caso?',
        //         options: [
        //             { key: null, value: 'Selecione' },
        //             { key: '1', value: 'Suspeito' },
        //             { key: '2', value: 'Liberado' },
        //             { key: '3', value: 'Confirmado' }
        //         ],
        //         required: true,
        //         order: 4
        //     }),
        //     new TextboxQuestion({
        //         key: 'otherssymptons',
        //         label: 'Quais outros sintomas? ',
        //         required: false,
        //         order: 5
        //     }),
        // ];

        return of(this.questionsSource.sort((a, b) => a.order - b.order));
    }
}