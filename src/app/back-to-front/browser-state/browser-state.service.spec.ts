import { TestBed, inject } from '@angular/core/testing';

import { BrowserStateService } from './browser-state.service';

describe('BrowserStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserStateService]
    });
  });

  it('should be created', inject([BrowserStateService], (service: BrowserStateService) => {
    expect(service).toBeTruthy();
  }));
});
