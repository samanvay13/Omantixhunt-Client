import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-email',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './email.component.html',
    styleUrl: './email.component.scss'
})
export class EmailComponent {}