// article detail component

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    `,
})
export class ArticleDetailComponent {
  constructor(articlesService: ArticlesService, route: ActivatedRoute) {
    this.articlesService = articlesService;
    this.route = route;
  }

  ngOnInit() {
    this.route.params
        .map(params => params.id)
        .flatMap(id => this.articlesService.getArticle(id))
        .subscribe(article => { this.article = article; });
  }
}
