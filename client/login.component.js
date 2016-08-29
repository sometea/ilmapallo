// login component

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  template: `
    <form (ngSubmit)="login()" #form="ngForm">
    <h2>Login</h2>
    <div>
    <label for="username">Username:</label>
    <input type="text" [(ngModel)]="model.username" name="name" required #name="ngModel" />
    </div>
    <div [hidden]="name.valid || name.pristine" class="alert alert.danger">Username is required!</div>
    <div>
    <label for="password">Password:</label>
    <input type="text" [(ngModel)]="model.password" name="password" required #password="ngModel" />
    <div [hidden]="password.valid || password.pristine" class="alert alert.danger">Password is required!</div>
    </div>
    <div><button type="submit" class="btn btn-primary">Login</button></div>
    <div *ngIf="!!errorMessage">{{ errorMessage }}</div>
    </form>
  `,
})
export class LoginComponent {
  constructor(router: Router, loginService: LoginService) {
    this.router = router;
    this.loginService = loginService;

    this.model = { username: '', password: '' };
    this.errorMessage = '';
  }

  login() {
    this.loginService.login(this.model.username, this.model.password)
        .then(response => {
          this.router.navigate(['articles']);
        })
        .catch((error) => {
          this.errorMessage = 'Login failed!';
        });
  }
}
