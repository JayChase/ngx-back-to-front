import { Injectable, Inject } from '@angular/core';
import { StateService } from '../state.service';

@Injectable()
export class BrowserStateService extends StateService {

  constructor() {
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
    console.log('State cannot be set on the browser side. Use UniversalService.isBrowser() to check whether running on client or server');
    // throw new Error('state cannot be set on the browser side');
  }

}
