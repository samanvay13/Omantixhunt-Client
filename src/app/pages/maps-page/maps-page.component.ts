import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-maps-page',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './maps-page.component.html',
    styleUrl: './maps-page.component.scss'
})
export class MapsPageComponent {}