import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { StateService } from '../state.service';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

    constructor(
        private stateService: StateService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }

        const state = this.stateService.get(req.urlWithParams);

        return next.handle(req)
            .do(event => {
                if (event instanceof HttpResponse && event.ok) {
                    this.stateService.set(req.urlWithParams, event.body);
                }
                return event;
            });

    }
}
