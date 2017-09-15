import { Injectable } from '@angular/core';
import { UniversalService } from './universal.service';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';


@Injectable()
export abstract class StateService {

  constructor(
  ) {
  }

  abstract get(key: string, persist?: boolean): string;
  abstract set(key: string, value: any): void;
}

