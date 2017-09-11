import { TestBed, inject } from '@angular/core/testing';
import { RendererFactory2 } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { ServerStateService } from './server-state.service';

describe('ServerStateService', () => {
  const mockPlatformState: any = {
    getDocument: (): any => { }
  };

  const mockRendererFactory2: any = {
    createRenderer: (document, options) => { },
    createElement: (name) => { },
    setValue: (el, value) => { },
    appendChild: (parent, child) => { }
  };

  beforeEach(() => {
    window['serialize'] = (value) => { };
    spyOn(<any>window, 'serialize');


    TestBed.configureTestingModule({
      providers: [
        ServerStateService,
        {
          provide: PlatformState,
          useValue: mockPlatformState
        },
        {
          provide: RendererFactory2,
          useValue: mockRendererFactory2
        }
      ]
    });
  });

  it('should be created', inject([ServerStateService], (service: ServerStateService) => {
    expect(service).toBeTruthy();
  }));
});
