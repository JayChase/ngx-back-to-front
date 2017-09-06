import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Injectable()
export abstract class StateService {

  constructor() {
    Observable.prototype['backToFront'] = this.exportToJson();
  }

  abstract get(key: string): string;
  abstract set(key: string, value: any): void;

  exportToJson<T>(): () => Observable<T> {
    const stateService = this;

    return function() {
      const ss = stateService;
      return (<any>this);
    };
  }
}

