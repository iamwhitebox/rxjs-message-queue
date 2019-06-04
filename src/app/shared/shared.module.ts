import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { RunEngineService } from './services/run-engine/run-engine.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RunEngineService]
    };
  }
}