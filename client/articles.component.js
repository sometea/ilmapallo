// root component of the application

import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { ArticlesService } from './articles.service';
import { ArticleEditComponent } from './article-edit.component';

import template from './articles.template.html';

@Component({
   directives: [ArticleEditComponent],
   selector: 'articles',
   template: template
})
export class ArticlesComponent {
  constructor(articlesService: ArticlesService, router: Router) {
    this.articlesService = articlesService;
    this.router = router;
  }

  fetchArticles() {
    this.articlesService.getArticles().then(articles => this.articles = articles);
  }

  ngOnInit() {
    this.fetchArticles();
  }

  onSelect(article) {
    this.selectedArticle = article;
  }

  onShow(article) {
    this.router.navigate(['Article', { id: article._id }]);
  }
};
