/* the site visitor facing home page component */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import ImagesService from './images.service';
import ArticlesService from './articles.service';

import template from './home.template.html';

@Component({
  selector: 'home',
  template,
})
export default class HomeComponent {
  constructor(articlesService: ArticlesService) {
    this.articlesService = articlesService;
  }

  fetchArticles() {
    this.articlesService.getArticles().subscribe(articles => { this.articles = articles; });
  }

  ngOnInit() {
    this.fetchArticles();
  }
}
