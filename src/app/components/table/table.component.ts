import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ApiService]
})
export class TableComponent implements OnInit {
  private _users: User[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this._users = users;
      this.sortByEmail(); // fixme: temporary solution
    });
  }

  private sortByEmail() {
    const compare = (a, b) => a.email.localeCompare(b.email);
    this._users = this._users.sort(compare);
  }

  get users(): User[] {
    return this._users;
  }
}
