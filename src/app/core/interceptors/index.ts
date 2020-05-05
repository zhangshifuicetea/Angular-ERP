import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {LoggerInterceptor} from './logger.interceptor';
import {HttpLoadingInterceptor} from './http-loading.interceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true},
];
