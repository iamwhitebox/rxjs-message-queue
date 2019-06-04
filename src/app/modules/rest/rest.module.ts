import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from 'src/app/core/http/rest/rest.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [RestService]
})
export class RestModule { }
