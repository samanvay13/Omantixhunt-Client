import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-starter',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './starter.component.html',
    styleUrl: './starter.component.scss'
})
export class StarterComponent {}