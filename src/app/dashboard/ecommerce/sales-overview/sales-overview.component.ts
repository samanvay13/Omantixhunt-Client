import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sales-overview',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './sales-overview.component.html',
    styleUrl: './sales-overview.component.scss'
})
export class SalesOverviewComponent {

    @Input() progress: number = 74; // Input property to bind progress value

}