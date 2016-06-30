// the image angular service

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { LoginService } from './login.service';

@Injectable()
export class ImagesService {
  imagesUrl = '/api/images/';

  constructor(http: Http, loginService: LoginService) {
    this.http = http;
    this.loginService = loginService;
  }

  getImages() {
    // return Promise.resolve([{ title: 'Testbild', filename: 'testbild.png' }]);
    return this.http.get(this.imagesUrl).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getImage(id) {
    // return Promise.resolve({ title: 'Testbild', filename: 'testbild.png' });
    return this.http.get(this.imagesUrl + id).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  deleteImage(id) {
    const headers = new Headers({ 'Authorization': this.loginService.getToken() });
    return this.http.delete(this.imagesUrl + id, { headers }).toPromise()
               .then(response => response.json())
               .catch(this.handleError);
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
        .toPromise().then(() => image)
        .catch(this.handleError);
    }
    return this.http.post(url, JSON.stringify(image), { headers })
      .toPromise().then(() => image)
      .catch(this.handleError);
  }

  handleError(error) {
    if (error.status === 401) console.log('Access denied');
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
