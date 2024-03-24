import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-instructors',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-instructors.component.html',
    styleUrl: './total-instructors.component.scss'
})
export class TotalInstructorsComponent {}