import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-charts',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './charts.component.html',
    styleUrl: './charts.component.scss'
})
export class ChartsComponent {}