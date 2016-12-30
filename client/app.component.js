// the main application component

import { Component } from '@angular/core';

import ImagesService from './images.service';
import ArticlesService from './articles.service';
import LoginService from './login.service';

import template from './app.template.html';

@Component({
  selector: 'my-app',
  providers: [ArticlesService, ImagesService, LoginService],
  template,
})
export default class AppComponent {
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
