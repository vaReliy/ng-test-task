import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  createUser(user: User) {
    return this.httpClient.post(`${this.apiURL}/posts/`, user);
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiURL}/posts`);
  }
}
