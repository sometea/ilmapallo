// the main application component

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ImagesComponent } from './images.component';
import { ImagesService } from './images.service';
import { LoginComponent } from './login.component';
import { ArticlesService } from './articles.service';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ArticlesService, ImagesService, LoginService],
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['articles']">Articles</a>
    <a [routerLink]="['images']">Images</a>
    <a [routerLink]="['login']" *ngIf="!loginService.isLoggedIn()">Log in</a>
    <a [routerLink]="['logout']" (click)="logout()" *ngIf="loginService.isLoggedIn()">Log out</a>
    <span *ngIf="loginService.isLoggedIn()">Logged in as {{ loginService.getUser().username }}!</span>
    <span *ngIf="!loginService.isLoggedIn()">Not logged in.</span>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  title = 'Ilmapallo 2';

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  logout() {
    this.loginService.logout();
  }
}
