import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpLoadingService} from '../http-loading.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  private _inProgressCount = 0;

  constructor(
    private loadingService: HttpLoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._inProgressCount++;

    this.loadingService.show();

    return next.handle(request).pipe(
      finalize(() => {
        this._inProgressCount--;
        if (this._inProgressCount === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
