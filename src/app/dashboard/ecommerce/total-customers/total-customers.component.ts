import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-customers',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-customers.component.html',
    styleUrl: './total-customers.component.scss'
})
export class TotalCustomersComponent {}