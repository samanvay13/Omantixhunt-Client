import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-refunds',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-refunds.component.html',
    styleUrl: './total-refunds.component.scss'
})
export class TotalRefundsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

}