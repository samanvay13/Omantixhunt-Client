import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-events-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './events-page.component.html',
    styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {}