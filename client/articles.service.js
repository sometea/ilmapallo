// the article angular service

// import { Base64 } from 'base64-js/base64';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticlesService {
  articlesUrl = 'articles/';

  constructor(http: Http) {
    this.http = http;
  }

  getArticles() {
    return this.http.get(this.articlesUrl).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getArticle(id) {
    return this.http.get(this.articlesUrl + id).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  deleteArticle(id) {
    return this.http.delete(this.articlesUrl + id).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  saveArticle(article) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.btoa('user:user'),
    });
    let method = this.http.post;
    let url = this.articlesUrl;
    if (article._id) {
      method = this.http.put;
      url = url + article._id;
    }
    return this.http.put(url, JSON.stringify(article), { headers })
      .toPromise().then(() => article)
      .catch(this.handleError);
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
