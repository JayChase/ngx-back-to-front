import { TestBed, inject } from '@angular/core/testing';
import { BrowserStateService } from './browser-state.service';
import { UniversalService } from '../universal.service';


describe('BrowserStateService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BrowserStateService
      ]
    });
  });

  it('should be created', inject([BrowserStateService], (service: BrowserStateService) => {
    expect(service).toBeTruthy();
  }));

  it('should log warning if set called', inject([BrowserStateService], (service: BrowserStateService) => {
    spyOn(console, 'log');
    service.set('a', 'a');

    expect(console.log).toHaveBeenCalled();
  }));

  it('should return undefined is !window.state', inject([BrowserStateService], (service: BrowserStateService) => {
    const result = service.get('a');
    expect(result).toBeUndefined();
  }));

  it('should return key value if exists', inject([BrowserStateService], (service: BrowserStateService) => {
    const state: any = {
      a: 1
    };

    window['state'] = {
      a: state
    };

    const result = service.get('a');
    expect(result).toBe(state);
  }));

  it('should return undefined if key value not on state', inject([BrowserStateService], (service: BrowserStateService) => {
    window['state'] = {
    };

    const result = service.get('a');
    expect(result).toBeUndefined();
  }));

  it('should delete key value if exists', inject([BrowserStateService], (service: BrowserStateService) => {
    const state: any = {
      a: 1
    };

    window['state'] = {
      a: state
    };

    const result = service.get('a');
    expect(window['state'].a).toBeUndefined();
  }));
});
