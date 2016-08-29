// client side router

import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ImagesComponent } from './images.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: ArticlesComponent },
  { path: 'home', component: HomeComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

export const appRoutingProviders = [];

