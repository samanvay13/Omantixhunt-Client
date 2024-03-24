import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-basic-drawer',
    standalone: true,
    imports: [MatSidenavModule],
    templateUrl: './basic-drawer.component.html',
    styleUrl: './basic-drawer.component.scss'
})
export class BasicDrawerComponent {

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