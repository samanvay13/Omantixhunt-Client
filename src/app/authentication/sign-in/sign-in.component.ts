import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { AuthenticationService } from './auth.service';
import { APIService } from '../../apiservice';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    // isToggled
    isToggled = false;
    username: string;
    password: string;
    errorMessage = '';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;
    returnUrl: string = "";
    show = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public themeService: CustomizerSettingsService,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private apiSrv: APIService
    ) {
        this.authForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Password Hide
    hide = true;

    // Form
    authForm: FormGroup;
    
    onSubmit() {
        this.show = true;
        this.successMessage = "";
    
        this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    
        this.authenticationService.authenticateUser(this.authForm.value.username, this.authForm.value.password).subscribe({
            next: (result) => {
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.show = true;
            this.successMessage = 'Login Successful.';
    
            if (this.returnUrl == null) {
                this.returnUrl = '/';
            }
    
            this.authenticationService.returnUrl = this.returnUrl;
            this.router.navigate([this.returnUrl]);
            }, error: () => {
            this.successMessage = "Authentication failed";
            }
        });
    }

}