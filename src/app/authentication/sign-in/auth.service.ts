import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APIService } from '../../apiservice';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION = 'authenticatedUser'

  public username: String;
  public password: String;
  _returnUrl: string;

  constructor(private http: HttpClient, private apiSrv: APIService, private cookieService: CookieService, private _snackBar: MatSnackBar, private router: Router) { 
    if(this.isUserLoggedIn()){
      let token = this.cookieService.get('omantixhunt.auth.token');
    }else{
      this.router.navigate(['/authentication'])
    }
  }

  public currentUserValue(): boolean {
    return this.isUserLoggedIn();
  }

  authenticateUser(username: String, password: String) {
    let reqData = {
      username,
      password
    };
    return this.http.post(this.apiSrv.URL + 'login', reqData)
      .pipe(map((res: any) => {
        this.cookieService.set('omantixhunt.auth.token', res.token);
        this.username = username;
        this.password = password;
        this.setLoggedInUserName(username);
      }));
  }

  setLoggedInUserName(username) {
    sessionStorage.setItem(this.USER_NAME_SESSION, username);
    this.cookieService.set('username', username);
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    if (!user && this.cookieService.get('username')) {
      user = this.cookieService.get('username');
    }
    if (user === null) return '';
    return user;
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION);
    this.cookieService.deleteAll();
    this.apiSrv.clearUserObj()
    this.username = null;
    this.password = null;
  }
  
  private parseJwt(token:string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  private getExpiryTime(token:string): Date{
    let data = this.parseJwt(token);
    if (data.exp) {
      return new Date(data.exp * 1000);
    }
    return new Date();
  }
  
  isUserLoggedIn() {
    let isAuth = false;
    if (this.cookieService.check('omantixhunt.auth.token')) {
      let token = this.cookieService.get('omantixhunt.auth.token');
      isAuth = this.getExpiryTime(token) > new Date();
    }
    if(!isAuth){
      this.cookieService.delete('omantixhunt.auth.token');
    }
    return isAuth;
    // let user = sessionStorage.getItem(this.USER_NAME_SESSION);
    // let usr = this.cookieService.get('username');
    // console.log("Cookie session = " + usr);
    // if (usr === null) return false
    // if (usr === '') return false

    // return true
  }

  set returnUrl(value: string) {
    this._returnUrl = value;
  }

  get returnUrl(): string {
    return this._returnUrl;
  }

}
