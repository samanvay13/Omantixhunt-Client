import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-ui-elements',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './ui-elements.component.html',
    styleUrl: './ui-elements.component.scss'
})
export class UiElementsComponent {}