import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:  [ ApiService ]
})
export class TableComponent implements OnInit { // fixme: the component doesn't work
  // private users: Observable<User[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      console.log(users);
    });
  }

}
