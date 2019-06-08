import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() userAddEmitter = new EventEmitter<User>();
  private _form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])),
    birthday: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
  }); // fixme: need to use correct validators

  constructor() {
  }

  ngOnInit() {
  }

  onButtonClick() {
    if (this._form.valid) {
      const user: User = this.getUserFromForm();
      this._form.reset({
        userName: '',
        email: '',
        phoneNumber: '',
        birthday: ''
      });
      this.userAddEmitter.emit(user);
    }
  }

  private getStatus(formItem: string): string {
    return this._form.get(formItem).status;
  }

  private formItemValue(formItem: string): string {
    return this._form.get(formItem).value as string;
  }

  private isInvalidInput(formItem: string): boolean {
    const item = this._form.get(formItem);
    return item.value !== '' && item.status === 'INVALID';
  }

  private getUserFromForm(): User {
    const user = new User();
    user.userName = this.formItemValue('userName');
    user.email = this.formItemValue('email');
    user.phoneNumber = this.formItemValue('phoneNumber');
    user.birthday = this.formItemValue('birthday');
    return user;
  }
}
