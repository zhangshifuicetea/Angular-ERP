import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login().subscribe(() => {
      const redirectUrl = this.authService.redirectUrl || '/';
      this.router.navigate([redirectUrl]);
    });


  }

  logout() {
    this.authService.logout();
  }

}
