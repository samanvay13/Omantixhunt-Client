import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router, private route: ActivatedRoute,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (this.authenticationService.isUserLoggedIn()) {
            return true;  
        } else {
            this.router.navigate(['/authentication'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}