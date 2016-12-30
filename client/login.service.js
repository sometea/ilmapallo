// login service

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export default class LoginService {
  constructor(http: Http) {
    this.http = http;
    this.jwtToken = '';
    this.user = {
      username: '',
      password: '',
    };
  }

  isLoggedIn() {
    return !!this.jwtToken;
  }

  getToken() {
    return this.jwtToken;
  }

  getUser() {
    // To do: get the user information directly by decoding the JWT token
    return this.user;
  }

  login(username, password) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    return this.http.post('/api/auth/authenticate', JSON.stringify({ username, password }),
                          { headers }).toPromise()
                    .then(response => {
                      this.jwtToken = response.json().token;
                      this.user.username = username;
                      this.user.password = password;
                      return this.jwtToken;
                    })
                    .catch(this.handleError);
  }

  logout() {
    this.jwtToken = '';
    return this.jwtToken;
  }

  handleError(error) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
