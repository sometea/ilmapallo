// the image angular service

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';

import { LoginService } from './login.service';

@Injectable()
export class ImagesService {
  imagesUrl = '/api/images/';

  constructor(http: Http, loginService: LoginService) {
    this.http = http;
    this.loginService = loginService;
  }

  getImages() {
    return this.http.get(this.imagesUrl)
               .map(response => response.json())
               .catch(err => this.handleError(err));
  }

  getImage(id) {
    return this.http.get(this.imagesUrl + id).toPromise()
               .map(response => response.json())
               .catch(err => this.handleError(err));
  }

  deleteImage(id) {
    const headers = new Headers({ 'Authorization': this.loginService.getToken() });
    return this.http.delete(this.imagesUrl + id, { headers })
               .map(response => response.json())
               .catch(err => this.handleError(err));
  }

  saveImage(image) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.getToken(),
    });
    let url = this.imagesUrl;
    if (image._id) {
      url = url + image._id;
      return this.http.put(url, JSON.stringify(image), { headers })
                      .catch(this.handleError);
    }
    return this.http.post(url, JSON.stringify(image), { headers })
                    .catch(this.handleError);
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
