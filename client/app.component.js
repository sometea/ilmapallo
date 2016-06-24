// the main application component

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail.component';
import { LoginComponent } from './login.component';
import { ArticlesService } from './articles.service';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ArticlesService, LoginService, ROUTER_PROVIDERS],
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Articles']">Articles</a>
    <a [routerLink]="['Login']">Login</a>
    <span *ngIf="loginService.isLoggedIn()">Logged in!</span>
    <span *ngIf="!loginService.isLoggedIn()">Not logged in.</span>
    <router-outlet></router-outlet>
    `,
})
@RouteConfig([
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesComponent,
    useAsDefault: true,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticleDetailComponent,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
])
export class AppComponent {
  title = 'Ilmapallo 2';

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }
}
