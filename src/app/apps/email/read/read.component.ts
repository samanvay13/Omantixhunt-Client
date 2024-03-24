import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-read',
    standalone: true,
    imports: [RouterLink, SidebarComponent, MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './read.component.html',
    styleUrl: './read.component.scss'
})
export class ReadComponent {

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