import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ApiService]
})
export class UsersComponent implements OnInit {
  private _users: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsersFromServer();
  }

  createUser(user: User) {
    this.apiService.createUser(user).subscribe((addedUser: User) => {
      this._users.push(addedUser);
      this.sortByEmail(); // fixme: temporary solution
    });
  }

  getUsersFromServer() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this._users = users;
      this.sortByEmail(); // fixme: temporary solution
    });
  }

  private sortByEmail() { // fixme: temporary solution
    const compare = (a, b) => a.email.localeCompare(b.email);
    this._users = this._users.sort(compare);
  }

}
