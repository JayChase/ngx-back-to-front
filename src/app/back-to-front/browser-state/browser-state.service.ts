import { Injectable, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StateService } from '../state.service';
import { PlatformState } from '@angular/platform-server';


@Injectable()
export class BrowserStateService extends StateService {

  constructor(
  ) {
    super();
  }

  get(key: string, persist?: boolean): string {
    let result: any;

    if (window['state']) {
      result = window['state'][key];

      if (!persist) {
        delete window['state'][key];
      }
    }

    return result;
  }

  set(key: string, value: any) {
    // throw new Error('state cannot be set on the browser side');
  }

}
