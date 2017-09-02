import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/delay';

@Injectable()
export class TestService {

  constructor(private ngZone: NgZone) { }

  test(): Observable<string> {
    return Observable.of('test').delay(1000);
  }
}
