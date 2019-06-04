import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    private _runEngineService: RunEngineService
  ) {
    super();
  }

  data: any;

  ngOnInit() {
    const subscription = this._runEngineService.channel('dashboard')
      .observe('dashboard.event')
      .subscribe(
        data => this.data = data,
        error => alert(error)
      );
  }
}
