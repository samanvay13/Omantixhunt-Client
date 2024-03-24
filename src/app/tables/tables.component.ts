import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-tables',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.scss'
})
export class TablesComponent {}