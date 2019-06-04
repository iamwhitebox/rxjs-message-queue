import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/http/rest/rest.service';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  constructor(
    private _restService: RestService,
    private _runEngineService: RunEngineService
  ) { }

  ngOnInit() {
    this._restService.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        delay(2000)
      )
      .subscribe(data => {
        this._runEngineService.channel('login')
          .subject('login.event')
          .next({
            title: 'Event from Channel A',
            text: 'Your first login post has been added',
          });
      });

    this._restService.get('https://jsonplaceholder.typicode.com/todos/2')
      .pipe(
        delay(1000)
      )
      .subscribe(data => {
        this._runEngineService.channel('dashboard')
          .subject('dashboard.event')
          .next({
            title: 'Event from Channel B',
            text: 'Your first dashboard post has been added',
          });
      });

  }

}
