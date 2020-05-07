import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {StorageStoreService} from './storage-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\//
  ignoreTokenUrls?: RegExp[] | null = [/\/login/, /assets\//, /passport\//];
  redirectUrl: string;
  authToken: string;

  constructor(
    private router: Router,
    private storageService: StorageStoreService,
  ) { }

  getToken(): string {
    this.authToken = this.storageService.get<string>('token');
    return this.authToken;
  }

  setToken(token: string) {
    this.storageService.set<string>('token', token);
    this.authToken = token;
  }

  removeToken() {
    this.authToken = undefined;
    this.storageService.remove('token');
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.setToken('token-erp');
      })
    );
  }

  logout() {
    this.removeToken();
    this.redirectUrl = undefined;
    this.router.navigate(['/passport/login']);
  }
}
