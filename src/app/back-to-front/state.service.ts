import { Injectable } from '@angular/core';
import { UniversalService } from './universal.service';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';


@Injectable()
export abstract class StateService {

  constructor(
    private universalService: UniversalService
  ) {
    Observable.prototype['backToFront'] = this.backToFrontOperator();
  }

  abstract get(key: string): string;
  abstract set(key: string, value: any): void;

  backToFrontOperator<T>(): () => Observable<T> {
    const stateService = this;

    return function () {
      const ss = stateService;

      if (!ss.universalService.isBrowser()) {
        return this.map((result) => {
          ss.set('test', result);
          return result;
        });
      } else {
        return this;
      }

      // this needs to go in the interceptor
      // const state = ss.get(key);

      // if (state) {
      //   return Observable.of(state);
      // } else {
      //   return (<any>this);
      // }
    };
  }
}

