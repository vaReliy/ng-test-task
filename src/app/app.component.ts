import {Component} from '@angular/core';
import {EventService} from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test-task';

  constructor(private eventService: EventService) {
  }
}
