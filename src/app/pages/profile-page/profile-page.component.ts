import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    imports: [RouterLink, RouterOutlet, MatCardModule, MatMenuModule, MatButtonModule, RouterLinkActive],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

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