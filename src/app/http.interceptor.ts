import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of, tap, EMPTY } from 'rxjs';
import { AuthenticationService } from './authentication/sign-in/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService,private cookieService: CookieService, private _snackBar: MatSnackBar, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.cookieService.get('omantix.auth.token');
        if(req.url.indexOf('authenticate') > -1 || req.url.indexOf('refreshToken') > -1 || req.url.indexOf('openweathermap') > -1 || req.url.indexOf('googleapis') > -1 || req.url.indexOf('google') > -1){
            return next.handle(req);
        }
        if (token) {
            let headersObj:any = {
                'Authorization': `Bearer ${this.cookieService.get('omantix.auth.token')}`
            };
            const authReq = req.clone({
                headers: new HttpHeaders(headersObj)

            });
            return next.handle(authReq).pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                    }
                }),
                catchError((err: any) => {
                    if(err instanceof HttpErrorResponse) {
                        if(err.status === 401) {
                            if(err.error.message){
                                this._snackBar.open(err.error.message, 'ok', {
                                    duration: 1000
                                });
                                if(req.url.indexOf('approveRejectDebtorInfoInvalidationRequest') === -1){
                                    this.cookieService.deleteAll();
                                    this.router.navigate(['/login']);
                                }
    
                            }
                        }
                        if(err.status === 500){
                            this._snackBar.open('Internal Error Occured.', 'ok');
                        }
                        if(err.status === 400){
                            this._snackBar.open(err.error.message, 'ok');
                        }
                    }
                    return of(err);
                }));;
        } 
        return EMPTY
    }
}