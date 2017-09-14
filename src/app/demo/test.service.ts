import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/delay';

@Injectable()
export class TestService {

  constructor(
    private ngZone: NgZone,
    private httpClient: HttpClient
  ) { }

  getPhoto(id: number): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }

  slowResponse(delay: number): Observable<string> {
    return Observable.of('test').delay(delay);
  }
}
