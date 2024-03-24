import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-icons',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss'
})
export class IconsComponent {}