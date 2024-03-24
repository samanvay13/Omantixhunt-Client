import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-project-management-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './project-management-page.component.html',
    styleUrl: './project-management-page.component.scss'
})
export class ProjectManagementPageComponent {}