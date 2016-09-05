// the article angular service

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LoginService } from './login.service';

@Injectable()
export class ArticlesService {
  articlesUrl = '/api/articles/';

  constructor(http: Http, loginService: LoginService) {
    this.http = http;
    this.loginService = loginService;
  }

  getArticles() {
    return this.http.get(this.articlesUrl)
      .map(response => response.json())
      .catch(err => this.handleError(err));
  }

  getArticle(id) {
    return this.http.get(this.articlesUrl + id)
      .map(response => response.json())
      .catch(err => this.handleError(err));
  }

  deleteArticle(id) {
    const headers = new Headers({ 'Authorization': this.loginService.getToken() });
    return this.http.delete(this.articlesUrl + id, { headers })
               .map(response => response.json())
               .catch(err => this.handleError(err));
  }

  saveArticle(article) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.getToken(),
    });
    let url = this.articlesUrl;
    if (article._id) {
      url = url + article._id;
      return this.http.put(url, JSON.stringify(article), { headers })
                      .catch(this.handleError);
    }
    return this.http.post(url, JSON.stringify(article), { headers })
                    .catch(this.handleError);
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
