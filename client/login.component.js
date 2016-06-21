// login component

import { Component, Input } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { RouteParams, Router } from '@angular/router-deprecated';

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
      <button type="submit" class="btn btn-primary">Login</button>
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
  }

  login() {
    this.loginService.login(this.form.value.username, this.form.value.password)
        .then(response => {
          this.router.navigate(['Articles']);
        });
  }
}
