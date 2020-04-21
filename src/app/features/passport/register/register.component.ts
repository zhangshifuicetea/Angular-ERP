import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmValidator]],
      agree: [false, Validators.requiredTrue]
    });
  }

  register() {
    this.authService.login().subscribe(() => {
      const redirectUrl = this.authService.redirectUrl || '/';
      this.router.navigate([redirectUrl]);
    });
  }

  confirmValidator = (control: FormControl): ValidationErrors => {
    if (control.value !== this.registerForm?.get('password').value) {
      return {confirm: true};
    } else {
      return null;
    }
  }



}
