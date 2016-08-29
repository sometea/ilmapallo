// articles component

import { Component } from '@angular/core';

import { ArticlesService } from './articles.service';
import { ArticleEditComponent } from './article-edit.component';
import { LoginService } from './login.service';

import template from './articles.template.html';

@Component({
  selector: 'articles',
  template,
})
export class ArticlesComponent {
  constructor(articlesService: ArticlesService, loginService: LoginService) {
    this.articlesService = articlesService;
    this.loginService = loginService;
  }

  fetchArticles() {
    this.articlesService.getArticles().subscribe(articles => { this.articles = articles; });
  }

  ngOnInit() {
    this.fetchArticles();
  }

  onSelect(article) {
    this.selectedArticle = article;
  }

  onNew() {
    this.selectedArticle = {
      title: 'New Article',
      text: 'Insert text here.',
    };
  }

  onRefresh() {
    this.fetchArticles();
  }
}
