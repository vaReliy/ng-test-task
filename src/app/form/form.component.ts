import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(10)])),
    birthday: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])),
  }); // fixme: need to use correct validators

  constructor() {
  }

  ngOnInit() {
  }

  onButtonClick() {
    if (this.isValidForm()) {
      console.log('all data is valid!');
      // todo: handle data
    }
  }

  private getStatus(formItem: string): string {
    return this.form.get(formItem).status;
  }

  private isValidForm(): boolean {
    return this.isValid('userName') && this.isValid('email') && this.isValid('phoneNumber') && this.isValid('birthday');
  }

  private isValid(formItem: string): boolean {
    return this.form.get(formItem).status === 'VALID';
  }

}
