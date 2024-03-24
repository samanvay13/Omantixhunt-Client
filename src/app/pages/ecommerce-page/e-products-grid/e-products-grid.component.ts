import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-products-grid',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatCheckboxModule, MatSliderModule, FormsModule, MatButtonModule, MatIconModule],
    templateUrl: './e-products-grid.component.html',
    styleUrl: './e-products-grid.component.scss'
})
export class EProductsGridComponent {

    // Price
    startValue = 10;
    endValue = 4500;

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