import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-help-desk-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './help-desk-page.component.html',
    styleUrl: './help-desk-page.component.scss'
})
export class HelpDeskPageComponent {}