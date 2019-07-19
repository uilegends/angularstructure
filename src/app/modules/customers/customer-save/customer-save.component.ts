import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-save',
  template: `
  <form [formGroup]="form">
   <input type="text" [formControlName]="fieldName">
  </form>
  <pre>{{ form.value | json}}</pre>
  `,
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  form: FormGroup;
  fieldName = '';
  fieldValue = 'jury';

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl('32')
    });
  }

}
