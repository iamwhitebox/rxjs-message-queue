import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(
    _runEngineService: RunEngineService
  ) {
    super(
      _runEngineService,
      'login'
    );
  }

  events: any[] = [];

  ngOnInit() {
    const channel = this._runEngineService.channel('login');

    const subscription = channel.observe('last.login')
      .subscribe(data => this.events.push(data));
  }

}
