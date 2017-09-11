import { TestBed, inject, fakeAsync, async, tick } from '@angular/core/testing';
import { ServerStateInterceptor } from './server-state.interceptor';
import { HttpResponse } from '@angular/common/http';
import { StateService } from '../state.service';
import { Observable } from 'rxjs/rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

describe('ServerStateInterceptor', () => {
    const mockStateService: any = {
        get: (key: string, persist?: boolean) => { },
        set: (key: string, value: any) => { }
    };

    let req: any;
    let next: any;

    beforeEach(() => {
        next = {
            handle: (value) => { }
        };

        TestBed.configureTestingModule({
            providers: [
                ServerStateInterceptor,
                {
                    provide: StateService,
                    useValue: mockStateService
                }
            ]
        });
    });

    it('should be created', inject([ServerStateInterceptor], (serverStateInterceptor: ServerStateInterceptor) => {
        expect(serverStateInterceptor).toBeTruthy();
    }));

    it('should call next.handle(req) if request is GET', inject([ServerStateInterceptor], (serverStateInterceptor: ServerStateInterceptor) => {
        req = {
            method: 'POST'
        };

        spyOn(next, 'handle').and.returnValue(Observable.of({}));

        serverStateInterceptor.intercept(req, next);

        expect(next.handle).toHaveBeenCalledWith(req);
    }));

    it('should call next.handle(req) if request is not GET', inject([ServerStateInterceptor], (serverStateInterceptor: ServerStateInterceptor) => {
        req = {
            method: 'GET'
        };

        spyOn(next, 'handle').and.returnValue(Observable.of({}));

        serverStateInterceptor.intercept(req, next);

        expect(next.handle).toHaveBeenCalledWith(req);
    }));

    it('should not set state if handle does not return HttpRepsonse', inject([ServerStateInterceptor, StateService], (serverStateInterceptor: ServerStateInterceptor, stateService: StateService) => {
        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        const response = {};

        spyOn(stateService, 'set');

        spyOn(next, 'handle').and.returnValue({
            do: (cb) => {
                cb(response);
                expect(stateService.set).not.toHaveBeenCalledWith();
            }
        });

        serverStateInterceptor.intercept(req, next);
    }));

    it('should not set state if repsonse is not ok (not 200s)', inject([ServerStateInterceptor, StateService], (serverStateInterceptor: ServerStateInterceptor, stateService: StateService) => {
        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        const response = new HttpResponse({
            status: 500,
            body: {
                a: 1
            }
        });

        spyOn(stateService, 'set');

        spyOn(next, 'handle').and.returnValue({
            do: (cb) => {
                cb(response);
                expect(stateService.set).not.toHaveBeenCalled();
            }
        });

        serverStateInterceptor.intercept(req, next);
    }));

    it('should set state with request urlWithParams as key', inject([ServerStateInterceptor, StateService], (serverStateInterceptor: ServerStateInterceptor, stateService: StateService) => {
        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        const handleSubject = new Subject();
        const response = new HttpResponse({
            body: {
                a: 1
            }
        });

        spyOn(stateService, 'set');

        spyOn(next, 'handle').and.returnValue({
            do: (cb) => {
                cb(response);
                expect(stateService.set).toHaveBeenCalledWith (req.urlWithParams, jasmine.any(Object));
            }
        });

        serverStateInterceptor.intercept(req, next);

    }));

    it('should set state with repsonse body as value', inject([ServerStateInterceptor, StateService], (serverStateInterceptor: ServerStateInterceptor, stateService: StateService) => {
        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        const handleSubject = new Subject();
        const response = new HttpResponse({
            body: {
                a: 1
            }
        });

        spyOn(stateService, 'set');

        spyOn(next, 'handle').and.returnValue({
            do: (cb) => {
                cb(response);
                expect(stateService.set).toHaveBeenCalledWith(jasmine.any(String), response.body);
            }
        });

        serverStateInterceptor.intercept(req, next);
    }));
});
