// article edit component

import { Component, Input } from '@angular/core';

import { ArticlesService } from './articles.service';

import template from './article-edit.template.html';

@Component({
  selector: 'article-edit',
  template: template
})
export class ArticleEditComponent {
    @Input() article;

    constructor(articlesService: ArticlesService) {
      this.articlesService = articlesService;
    }

    save() {
      this.articlesService.saveArticle(this.article).then(article => {
        this.article = article;
        this.statusMessage = 'Saved article.';
      }).catch(error => this.error = error);
    }

    remove() {
      this.articlesService.deleteArticle(this.article._id).then(articles => {
        this.article = {};
      }).catch(error => this.error = error);
    }
}
