import { TestBed } from '@angular/core/testing';

import { RunEngineService } from './run-engine.service';

describe('RunEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RunEngineService = TestBed.get(RunEngineService);
    expect(service).toBeTruthy();
  });
});
