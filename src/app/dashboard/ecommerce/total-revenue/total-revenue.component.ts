import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-revenue',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-revenue.component.html',
    styleUrl: './total-revenue.component.scss'
})
export class TotalRevenueComponent {}