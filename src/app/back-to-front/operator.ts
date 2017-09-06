import { Observable } from 'rxjs/rx';

function backToFront<T>(): Observable<T> {
    return this;
}

declare module 'rxjs/Observable' {
    interface Observable<T> {
        backToFront: typeof backToFront;
    }
}
