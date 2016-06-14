// article edit component

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ArticlesService } from './articles.service';

import template from './article-edit.template.html';

@Component({
  selector: 'article-edit',
  template: template
})
export class ArticleEditComponent {
    @Input() article;
    @Output() onRefresh = new EventEmitter;

    constructor(articlesService: ArticlesService) {
      this.articlesService = articlesService;
    }

    save() {
      this.articlesService.saveArticle(this.article).then(article => {
        this.article = article;
        this.statusMessage = 'Saved article.';
	this.onRefresh.emit();
      }).catch(error => this.error = error);
    }

  remove() {
    if (this.article._id) {
      this.articlesService.deleteArticle(this.article._id).then(articles => {
          this.article = null;
	  this.onRefresh.emit();
      }).catch(error => this.error = error);
    } else {
      this.article = null;
      this.onRefresh.emit();
    }
  }
}
