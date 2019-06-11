import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../service/api.service';

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
    });
  }

  getUsersFromServer() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this._users = users;
    });
  }
}
