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

import template from './app.template.html';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ArticlesService, ImagesService, LoginService],
  template,
})
export class AppComponent {
  // global configuration
  // TO DO: move this to a separate config layer
  title = 'Ilmapallo 2';
  hideMenuBar = true;  
    
  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  logout() {
    this.loginService.logout();
  }
}
