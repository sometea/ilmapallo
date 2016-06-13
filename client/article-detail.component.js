// article detail component

import { Component, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { ArticlesService } from './articles.service';

@Component({
  selector: 'article-detail',
  template: `
  <div *ngIf="article">
    <h2>{{ article.title }}</h2>
    <div>
     {{ article.text }}
    </div>
  </div>
  `
})
export class ArticleDetailComponent {
  constructor(articlesService: ArticlesService, routeParams: RouteParams) {
    this.articlesService = articlesService;
    this.routeParams = routeParams;
  }

  ngOnInit() {
    const id = this.routeParams.get('id');
    this.articlesService.getArticle(id).then(article => this.article=article);
  }
}
