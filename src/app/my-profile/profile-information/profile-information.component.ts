import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profile-information',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './profile-information.component.html',
    styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {}