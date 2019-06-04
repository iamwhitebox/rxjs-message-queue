import { Component, OnInit } from '@angular/core';
import { RunEngineService } from 'src/app/shared/services/run-engine/run-engine.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    public _runEngineService: RunEngineService,
    public _eventKey: string
  ) {
    this.subscription = this._runEngineService.channel(this._eventKey)
      .observe(`${this._eventKey}.event`)
      .subscribe(
        data => {
          this.data = data
        },
        error => alert(error)
      );
  }

  subscription: any;
  data: any;

  ngOnInit() {
  }

}
