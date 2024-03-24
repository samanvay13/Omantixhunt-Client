import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-invoices-page',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './invoices-page.component.html',
    styleUrl: './invoices-page.component.scss'
})
export class InvoicesPageComponent {}