import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EventEmitterService } from '../../eventemitterservice';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION = 'authenticatedUser'

  public username: String;
  public password: String;
  public _expTime = new BehaviorSubject<Date|null>(null);
  public expTime$ = this._expTime.asObservable();
  _returnUrl: string;

  constructor(private http: HttpClient, private eeService: EventEmitterService, private cookieService: CookieService, private _snackBar: MatSnackBar, private router: Router) { 
    if(this.isUserLoggedIn()){
      let token = this.cookieService.get('aiqon.auth.token');
      this._expTime.next(this.getExpiryTime(token));  
    }else{
      this.router.navigate(['/authentication'])
    }
  }

  public currentUserValue(): boolean {
    return this.isUserLoggedIn();
  }

  refreshToken(token:string){
    return this.http.get(this.eeService.URL + 'aiqon/refreshToken', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'isRefreshToken': 'true'
      }
    })
      .pipe(map((res: any) => {
        this.cookieService.set('aiqon.auth.token', res.token);
        let expiryTime = this.getExpiryTime(res.token);
        this._expTime.next(expiryTime);
      }));
  }

  authenticateUser(username: String, password: String) {
    let reqData = {
      username,
      password
    };
    return this.http.post(this.eeService.URL + 'aiqon/authenticate', reqData)
      .pipe(map((res: any) => {
        this.cookieService.set('aiqon.auth.token', res.token);
        let expiryTime = this.getExpiryTime(res.token);
        this._expTime.next(expiryTime);
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
    this.eeService.clearUserObj()
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
    if (this.cookieService.check('aiqon.auth.token')) {
      let token = this.cookieService.get('aiqon.auth.token');
      isAuth = this.getExpiryTime(token) > new Date();
    }
    if(!isAuth){
      this.cookieService.delete('aiqon.auth.token');
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
