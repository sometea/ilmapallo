// the main application component

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ArticlesService, ROUTER_PROVIDERS],
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Articles']">Articles</a>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesComponent,
    useAsDefault: true
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticleDetailComponent
  }
])
export class AppComponent {
  title = 'Ilmapallo 2';
}
