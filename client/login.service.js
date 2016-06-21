// login service

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(http: Http) {
    this.http = http;
    this.jwtToken = '';
  }

  isLoggedIn() {
    return !!this.jwtToken;
  }

  getToken() {
    return this.jwtToken;
  }

  login(username, password) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post('/auth/authenticate', JSON.stringify({ username, password }),
                          { headers }).toPromise()
                    .then(response => {
                      this.jwtToken = response.json().token;
                      return this.jwtToken;
                    })
             .catch(this.handleError);
  }

  handleError(error) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
