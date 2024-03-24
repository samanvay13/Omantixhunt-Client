import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-social-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './social-page.component.html',
    styleUrl: './social-page.component.scss'
})
export class SocialPageComponent {}