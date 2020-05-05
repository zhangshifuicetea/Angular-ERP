import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let ok: string;

    return next.handle(request).pipe(
      tap(event => ok = event instanceof HttpResponse ? 'succeed' : '', error => ok = 'failed'),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed}ms.`;
        console.log(msg);
      })
    );
  }
}
