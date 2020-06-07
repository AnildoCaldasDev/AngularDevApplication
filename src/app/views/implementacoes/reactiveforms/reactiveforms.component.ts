import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuestionBase } from './model/question-base';
import { Observable } from 'rxjs';
import { QuestionControlService } from '../../../services/question-control.service';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css'],
  providers: [QuestionControlService]
})
export class ReactiveformsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private questionsService: QuestionControlService) {
    this.questions$ = questionsService.getQuestions();
  }

  questions$: Observable<QuestionBase<any>[]>;
  processing: Boolean = false;

  addQuestion() {
    this.processing = true;
    this.questionsService.addQuestion();
    this.questions$ = this.questionsService.getQuestions();
    this.processing = false;
  }

  //examples with formControl:
  // name = new FormControl('');
  // updateName() {
  //   this.name.setValue('Anildo Caldas');
  // }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     number: new FormControl('')
  //   })
  // });

  // static fosm examples
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      number: [''],
    }),
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Anildo Caldas',
      teste: 'dgdgdgd',
      address: {
        street: 'Rua do retiro, 40'
      }
    });
  }
  // static fosm examples


  profileDynamicForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      number: [''],
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });


  get aliases() {
    return this.profileDynamicForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  updateDynamicProfile() {
    this.profileDynamicForm.patchValue({
      firstName: 'Anildo Caldas',
      teste: 'dgdgdgd',
      address: {
        street: 'Rua do retiro, 40'
      }
    });

    console.log(this.profileDynamicForm.value);
  }


  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit(): void {
  }
}
