import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './gallery-page.component.html',
    styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {}