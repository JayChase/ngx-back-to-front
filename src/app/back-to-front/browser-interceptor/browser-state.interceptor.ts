import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import { StateService } from '../state.service';

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {

    constructor(
        private stateService: StateService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }

        const state = this.stateService.get(req.urlWithParams);

        if (state) {
            const res = new HttpResponse({
                body: state
            });

            return Observable.of(res);
        } else {
            return next.handle(req);
        }

    }
}
