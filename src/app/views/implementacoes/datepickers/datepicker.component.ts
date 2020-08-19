import { Component, OnInit } from "@angular/core";
import { INgxMyDpOptions as IInitNgxMyDpOptions } from "ngx-mydatepicker";
import { INgxMyDpOptions as IFinaltNgxMyDpOptions } from "ngx-mydatepicker";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
//font: froms reactive: https://jasonwatmore.com/post/2019/06/14/angular-8-reactive-forms-validation-example
//font do date Picker: https://github.com/kekeh/ngx-mydatepicker
@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
})
export class DatepickerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  initDatePickerOptions: IInitNgxMyDpOptions = {
    dateFormat: "dd/mm/yyyy",
    dayLabels: {
      su: "Dom",
      mo: "Seg",
      tu: "Ter",
      we: "Qua",
      th: "Qui",
      fr: "Sex",
      sa: "Sáb",
    },
    monthLabels: {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro",
    },
    todayBtnTxt: "Hoje",
  };
  initDate: DateFormat = new DateFormat();
  finalDate: DateFormat = new DateFormat();

  finalDatePickerOptions: IFinaltNgxMyDpOptions = {
    dateFormat: "dd/mm/yyyy",
    dayLabels: {
      su: "Dom",
      mo: "Seg",
      tu: "Ter",
      we: "Qua",
      th: "Qui",
      fr: "Sex",
      sa: "Sáb",
    },
    monthLabels: {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro",
    },
    todayBtnTxt: "Hoje",
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Address: ["", Validators.required],
      InitDate: [null, Validators.required],
      FinalDate: [null, Validators.required],
    });
  }

  clearInitDate(): void {
    this.registerForm.patchValue({ InitDate: null });
    this.initDate = new DateFormat();
  }

  clearFinalDate(): void {
    this.finalDate = new DateFormat();
    this.registerForm.patchValue({ FinalDate: null });
  }

  onFinalDateChanged(event: any) {
    this.finalDate = event.date;
    console.log(event);
    // var incommingDate = event.formatted;
    //this.registerForm.patchValue({ FinalDate: event });
    this.compareRangeDate();
  }

  onInitDateChanged(event: any) {
    console.log(event);
    this.initDate = event.date;
    // var incommingDate = event.formatted;
    //this.registerForm.patchValue({ InitDate: event });
    this.compareRangeDate();
  }

  compareRangeDate() {
    var inittialDate = new Date(
      this.initDate.year,
      this.initDate.month - 1,
      this.initDate.day
    );
    var finalDate = new Date(
      this.finalDate.year,
      this.finalDate.month - 1,
      this.finalDate.day
    );

    if (inittialDate.getFullYear() > 2010 && finalDate.getFullYear() > 2010) {
      if (inittialDate.getTime() > finalDate.getTime()) {
        window.alert("Data Inicial maior que data Final");
        this.clearInitDate();
        this.clearFinalDate();
      }
    } else {
      console.log("Data em branco");
    }
  }
}

// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];

//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       // return if another validator has already found an error on the matchingControl
//       return;
//     }

//     // set error on matchingControl if validation fails
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ mustMatch: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   }
// }

export class DateFormat {
  year: number = 0;
  month: number;
  day: number;
}
