import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BlockModule } from './modules/block/block.module';
import { RestModule } from './modules/rest/rest.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './modules/block/components/login/login.component';
import { DashboardComponent } from './modules/block/components/dashboard/dashboard.component';
import { RestComponent } from './modules/rest/components/rest/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BlockModule,
    RestModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
