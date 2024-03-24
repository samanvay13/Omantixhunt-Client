import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [RouterLink, RouterOutlet, MatCardModule, MatButtonModule, RouterLinkActive],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent {

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