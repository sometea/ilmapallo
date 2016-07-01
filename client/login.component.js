// login component

import { Component, Input } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  directives: FORM_DIRECTIVES,
  template: `
    <form (ngSubmit)="login()" [ngFormModel]="form">
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" ngControl="username" /> <br/>
      <label for="password">Password:</label>
      <input type="text" ngControl="password" /> <br/>
      <button type="submit" class="btn btn-primary">Login</button> <br/>
      <div *ngIf="!!errorMessage">{{ errorMessage }}</div>
    </form>
  `,
})
export class LoginComponent {
  constructor(fb: FormBuilder, router: Router, loginService: LoginService) {
    this.router = router;
    this.loginService = loginService;

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.errorMessage = '';
  }

  login() {
    this.loginService.login(this.form.value.username, this.form.value.password)
        .then(response => {
          this.router.navigate(['articles']);
        })
        .catch((error) => {
          this.errorMessage = 'Login failed!';
        });
  }
}
