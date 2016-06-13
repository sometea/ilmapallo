// the article angular service

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
    return this.http.get(this.articlesUrl+id).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  deleteArticle(id) {
    return this.http.delete(this.articlesUrl+id).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  saveArticle(article) {
    const headers = new Headers({'Content-Type': 'application/json'});
    if (article._id) {
      return this.http.put(this.articlesUrl+article._id, JSON.stringify(article), {headers: headers})
                 .toPromise().then(() => article).catch(this.handleError);
    } else {
      return this.http.post(this.articlesUrl, JSON.stringify(article), {headers: headers})
                 .toPromise().then(() => article).catch(this.handleError);
    }
  }

  handleError(error) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
