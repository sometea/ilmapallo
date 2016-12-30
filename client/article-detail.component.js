// article detail component

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import ArticlesService from './articles.service';

import template from './article-detail.template.html';

@Component({
  selector: 'article-detail',
  template,
})
export default class ArticleDetailComponent {
  constructor(articlesService: ArticlesService, route: ActivatedRoute) {
    this.articlesService = articlesService;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articlesService.getArticle(params.id).subscribe(article => { this.article = article; });
    });
  }
}
