import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-top-selling-products',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink,MatFormFieldModule, NgIf],
    templateUrl: './quizpage.component.html',
    styleUrl: './quizpage.component.scss'
})

export class QuizpageComponent{
     // isToggled
     isToggled = false;

     // Form
    authForm: FormGroup;

     constructor(
         public themeService: CustomizerSettingsService,
         private fb: FormBuilder,
         private router: Router,
    ) {
        // this.authForm = this.fb.group({
        //     answer: ['', [Validators.required]],
        // });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }
 
     // RTL Mode
     toggleRTLEnabledTheme() {
         this.themeService.toggleRTLEnabledTheme();
     }
}