// client side router

import { provideRouter, RouterConfig } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ImagesComponent } from './images.component';
import { LoginComponent } from './login.component';

export const appRoutes: RouterConfig = [
  { path: '', redirectTo: 'articles', terminal: true },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: ArticlesComponent },
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);
