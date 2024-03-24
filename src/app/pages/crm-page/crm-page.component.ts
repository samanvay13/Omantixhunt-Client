import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-crm-page',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './crm-page.component.html',
    styleUrl: './crm-page.component.scss'
})
export class CrmPageComponent {}