import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-lms-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './lms-page.component.html',
    styleUrl: './lms-page.component.scss'
})
export class LmsPageComponent {}