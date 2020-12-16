import { Injectable } from '@angular/core';
import { Http, Header } from '@angular/http';
import "rxjs/add/operator/map";
import { tokenNotExpired } from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  register(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http/localhost:300/user/register", user, { headers: headers }).map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http/localhost:300/user/authenticate", user, { headers: headers }).map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http.get("http/localhost:300/user/profile", { headers: headers }).map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}