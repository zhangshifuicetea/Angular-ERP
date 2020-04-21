import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  redirectUrl: string;

  authToken: string;

  constructor(
    private router: Router
  ) { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout() {
    this.authToken = this.redirectUrl = undefined;
    this.isLoggedIn = false;
    this.router.navigate(['/passport/login']);
  }
}
