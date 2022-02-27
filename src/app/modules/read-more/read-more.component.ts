import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

import * as moment from 'moment';



@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styles: [
  ]
})
export class ReadMoreComponent implements OnInit {

  newForm: FormGroup;

  model: any;

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newForm = this.form.group({
      name:['', Validators.required],
      last_name:['', Validators.required],
      age:['',this.ageValidator(18)]
    });
  }

  ageValidator(age: number) {
    return (control: AbstractControl) => {
      let date_format = `${control.value.year}-${control.value.month}-${control.value.day}`;
      if ( control.value != '' && moment().diff(date_format, 'years')>=age ) {
        return true;
      }
      return { ageValidator: false};
    };
  }

  showData(){
    console.log(this.newForm.value);
  }

}
