import { TestBed, inject } from '@angular/core/testing';
import { BrowserStateInterceptor } from './browser-state.interceptor';
import { StateService } from '../state.service';

describe('BrowserStateInterceptor', () => {
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

        spyOn(next, 'handle');

        TestBed.configureTestingModule({
            providers: [
                BrowserStateInterceptor,
                {
                    provide: StateService,
                    useValue: mockStateService
                }
            ]
        });
    });

    it('should be created', inject([BrowserStateInterceptor], (browserStateInterceptor: BrowserStateInterceptor) => {
        expect(browserStateInterceptor).toBeTruthy();
    }));

    it('should call next.handle(req) if request is not GET', inject([BrowserStateInterceptor], (browserStateInterceptor: BrowserStateInterceptor) => {
        req = {
            method: 'POST'
        };

        browserStateInterceptor.intercept(req, next);

        expect(next.handle).toHaveBeenCalledWith(req);
    }));

    it('should check for existing state with key matching the url if request is GET', inject([BrowserStateInterceptor, StateService], (browserStateInterceptor: BrowserStateInterceptor, stateService: StateService) => {
        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        spyOn(stateService, 'get');

        browserStateInterceptor.intercept(req, next);

        expect(stateService.get).toHaveBeenCalledWith(req.urlWithParams);
    }));

    it('should return HttpResponse observable with body set to state if state is returned', inject([BrowserStateInterceptor, StateService], (browserStateInterceptor: BrowserStateInterceptor, stateService: StateService) => {
        const state = {
            a: 1
        };

        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        spyOn(stateService, 'get').and.returnValue(state);

        browserStateInterceptor.intercept(req, next)
            .subscribe((result: any) => {
                expect(result.body).toBe(state);
            });
    }));

    it('should not call next.hande() if state is returned', inject([BrowserStateInterceptor, StateService], (browserStateInterceptor: BrowserStateInterceptor, stateService: StateService) => {
        const state = {
            a: 1
        };

        req = {
            method: 'GET',
            urlWithParams: 'test'
        };

        spyOn(stateService, 'get').and.returnValue(state);

        browserStateInterceptor.intercept(req, next);

        expect(next.handle).not.toHaveBeenCalled();
    }));

});
