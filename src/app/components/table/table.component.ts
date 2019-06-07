import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {EventManager} from '@angular/platform-browser';
import {Observable, Subject} from 'rxjs';
import {User} from '../../models/user.model';
import {ApiService} from '../../service/api.service';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ApiService, EventService]
})
export class TableComponent implements OnInit {
  private _users: User[];

  constructor(private apiService: ApiService, private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.onUserAdded$.subscribe(this.onUserAdded);

    this.apiService.getUsers().subscribe((users: User[]) => {
      this._users = users;
      this.sortByEmail(); // fixme: temporary solution
    });
  }

  onUserAdded(data: any) {
    console.log('Table => added user', data);
  }

  private sortByEmail() {
    const compare = (a, b) => a.email.localeCompare(b.email);
    this._users = this._users.sort(compare);
  }

  get users(): User[] {
    return this._users;
  }
}
