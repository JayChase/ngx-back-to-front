import { TestBed, inject } from '@angular/core/testing';
import { RendererFactory2, ViewEncapsulation } from '@angular/core';
import { PlatformState } from '@angular/platform-server';
import { ServerStateService } from './server-state.service';

import * as serialize from 'serialize-javascript';

describe('ServerStateService', () => {
  const mockPlatformState: any = {
    getDocument: (): any => { }
  };

  const mockRenderer: any = {
    createElement: (name) => { },
    setValue: (el, value) => { },
    appendChild: (parent, child) => { }
  };

  const mockRendererFactory2: any = {
    createRenderer: (document, options) => {
      return mockRenderer;
    }
  };


  beforeEach(() => {
    window['serialize'] = () => { };

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
        },
        {
          provide: serialize,
          useValue: () => 'cack'
        }
      ]
    });
  });

  it('should be created', inject([ServerStateService], (service: ServerStateService) => {
    expect(service).toBeTruthy();
  }));

  it('should log warning if get called', inject([ServerStateService], (service: ServerStateService) => {
    spyOn(console, 'log');
    service.get('a');

    expect(console.log).toHaveBeenCalled();
  }));

  it('should get the current document from platformState', inject([ServerStateService, PlatformState], (service: ServerStateService, platformState: PlatformState) => {
    const doc = {
      head: {}
    };

    spyOn(platformState, 'getDocument').and.returnValue(doc);

    service.set('a', {});

    expect(platformState.getDocument).toHaveBeenCalled();
  }));

  it('should throw exception if no doc head', inject([ServerStateService, PlatformState], (service: ServerStateService, platformState: PlatformState) => {
    const doc = {
    };

    const state = {
      a: 1
    };

    spyOn(platformState, 'getDocument').and.returnValue(doc);

    expect(() => {
      service.set('a', state);
    }).toThrow();
  }));

  it('should create a script element', inject([ServerStateService, PlatformState, RendererFactory2], (service: ServerStateService, platformState: PlatformState, rendererFactory: RendererFactory2) => {
    const doc = {
      head: {}
    };

    const state = {
      a: 1
    };

    const renderer = rendererFactory.createRenderer(document, {
      id: '-1',
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {}
    });

    spyOn(platformState, 'getDocument').and.returnValue(doc);
    spyOn(renderer, 'createElement');

    service.set('a', state);

    expect(renderer.createElement).toHaveBeenCalledWith('script');

  }));

  it('should create append script to document head', inject([ServerStateService, PlatformState, RendererFactory2], (service: ServerStateService, platformState: PlatformState, rendererFactory: RendererFactory2) => {
    const doc = {
      head: {}
    };

    const state = {
      a: 1
    };

    const script = 'testscript';

    const renderer = rendererFactory.createRenderer(document, {
      id: '-1',
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {}
    });

    spyOn(platformState, 'getDocument').and.returnValue(doc);
    spyOn(renderer, 'createElement').and.returnValue(script);
    spyOn(renderer, 'appendChild');

    service.set('a', state);

    expect(renderer.appendChild).toHaveBeenCalledWith(doc.head, script);

  }));

});
