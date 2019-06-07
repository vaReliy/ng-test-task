import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from '../../service/api.service';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ApiService]
})
export class FormComponent implements OnInit {
  private _form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])),
    birthday: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
  }); // fixme: need to use correct validators

  constructor(private apiService: ApiService, private eventService: EventService) {
  }

  ngOnInit() {
  }

  onButtonClick() {
    if (this._form.valid) {
      const user: User = this.getUserFromForm();
      this.apiService.createUser(user).subscribe((addedUser: User) => {
        this._form.reset();
        this.eventService.onUserAdded(addedUser);
      });
    }
  }

  private getStatus(formItem: string): string {
    return this._form.get(formItem).status;
  }

  private formItemValue(formItem: string): string {
    return this._form.get(formItem).value as string;
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
