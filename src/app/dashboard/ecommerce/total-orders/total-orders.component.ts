import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-orders',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent {}