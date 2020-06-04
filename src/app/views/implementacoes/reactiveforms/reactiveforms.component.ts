import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


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


  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit(): void {
  }
}
