import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';

@Component({
    selector: 'app-wizard',
    standalone: true,
    imports: [RouterLink, MatCardModule, HorizontalComponent, VerticalComponent],
    templateUrl: './wizard.component.html',
    styleUrl: './wizard.component.scss'
})
export class WizardComponent {}