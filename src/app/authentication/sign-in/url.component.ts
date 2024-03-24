import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({template: ''})
export class UrlComponent implements OnInit {
  
  returnUrl = '';

  constructor(private router: Router,private route: ActivatedRoute,
                private authenticationService: AuthenticationService) { }


  ngOnInit(): void {
      this.returnUrl = this.authenticationService.returnUrl;
      if(this.returnUrl==null){
        this.returnUrl='dashboard';
      }
      console.log('inside urlcomponent url -->'+this.returnUrl);
      this.router.navigateByUrl(this.returnUrl);
  }

}
