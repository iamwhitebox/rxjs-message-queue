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

  ngOnInit() {
    this._restService.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        delay(2000)
      )
      .subscribe(data => {
        this._runEngineService.channel('login')
          .subject('login.event')
          .next({
            title: 'Event received from Channel A'
          });

        this.data['events'].push('Login Event Sent!');
      });

    this._restService.get('https://jsonplaceholder.typicode.com/todos/2')
      .pipe(
        delay(1000)
      )
      .subscribe(data => {
        this._runEngineService.channel('dashboard')
          .subject('dashboard.event')
          .next({
            title: 'Event received from Channel B'
          });

        this.data['events'].push('Dashboard Event Sent!');
      });

    this._restService.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        delay(3000)
      )
      .subscribe(data => {
        this._runEngineService.channel('login')
          .subject('last.login')
          .next({
            title: 'Other Event received from Channel A'
          });

        this.data['events'].push('Other Login Event Sent!');
      });

  }

}
