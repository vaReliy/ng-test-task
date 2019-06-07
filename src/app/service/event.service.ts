import {Observable, Subject} from 'rxjs';
import {User} from '../models/user.model';

export class EventService {
  private onUserAddedSubject = new Subject<any>();
  onUserAdded$: Observable<any> = this.onUserAddedSubject.asObservable();

  constructor() {
  }

  onUserAdded(user: User) {
    this.onUserAddedSubject.next(user);
  }
}
