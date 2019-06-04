import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    _runEngineService: RunEngineService
  ) {
    super(
      _runEngineService,
      'dashboard'
    );
  }

  data: any;

  ngOnInit() {
  }
}
