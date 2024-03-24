import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-product-development',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterLink, MatProgressBarModule],
    templateUrl: './product-development.component.html',
    styleUrl: './product-development.component.scss'
})
export class ProductDevelopmentComponent {

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

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}