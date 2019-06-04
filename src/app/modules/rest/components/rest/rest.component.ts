import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/http/rest/rest.service';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  constructor(
    private _restService: RestService,
    private _runEngineService: RunEngineService
  ) {
    this.data['events'] = [];
  }

  data: any = {};
  eventStream: any[] = [
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Event received from Channel A', delay: 1000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'dashboard', subject: 'dashboard.event', title: 'Event received from Channel B', delay: 2000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'last.login', title: 'Other Event received from Channel A', delay: 3000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Event received from Channel A', delay: 4000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'dashboard', subject: 'dashboard.event', title: 'Event received from Channel B', delay: 5000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Other Event received from Channel A', delay: 6000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Event received from Channel A', delay: 7000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'dashboard', subject: 'dashboard.event', title: 'Event received from Channel B', delay: 8000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'last.login', title: 'Other Event received from Channel A', delay: 9000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Event received from Channel A', delay: 10000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'dashboard', subject: 'dashboard.event', title: 'Event received from Channel B', delay: 11000 },
    { url: 'https://jsonplaceholder.typicode.com/todos/1', channel: 'login', subject: 'login.event', title: 'Other Event received from Channel A', delay: 12000 }
  ]

  eventMessages = {
    login: 'Login Event Sent!',
    dashboard: 'Dashboard Event Sent!'
  }

  ngOnInit() {
    this.eventStream.forEach(event => {
      this._restService.get(event.url)
        .pipe(
          delay(event.delay)
        )
        .subscribe(data => {
          this._runEngineService.channel(event.channel)
            .subject(event.subject)
            .next({ title: event.title });

          this.data['events'].push(this.eventMessages[event.channel]);
        });
    });
  }

}
