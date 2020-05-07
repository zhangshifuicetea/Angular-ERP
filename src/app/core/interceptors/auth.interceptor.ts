import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  isAuth() {
    const token = this.authService.getToken();
    return !!token;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.ignoreTokenUrls) {
      for (const item of this.authService.ignoreTokenUrls as RegExp[]) {
        if (item.test(request.url)) {
          return next.handle(request);
        }
      }
    }

    if (this.isAuth()) {
      const authReq = request.clone({setHeaders: {Authorization: this.authService.authToken}});
      return next.handle(authReq);
    } else {
      this.router.navigate(['/passport/login']);
      const err$ = new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
          url: request.url,
          headers: request.headers,
          status: 401,
          statusText: '拦截器未探测到token'
        });
        observer.error(res);
      });
      return err$;
    }

  }
}
