import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(
    private _runEngineService: RunEngineService
  ) {
    super();
  }

  data: any;

  ngOnInit() {
    const subscription = this._runEngineService.channel('login')
      .observe('login.event')
      .subscribe(
        data => {
          this.data = data
        },
        error => alert(error)
      );
  }
}
