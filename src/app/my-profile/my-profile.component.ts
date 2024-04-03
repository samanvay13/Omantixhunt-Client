import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

@Component({
    selector: 'app-my-profile',
    standalone: true,
    imports: [RouterLink, WelcomeComponent, ProfileIntroComponent, ProfileInformationComponent ],
    templateUrl: './my-profile.component.html',
    styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {}