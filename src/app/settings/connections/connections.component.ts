import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-connections',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatDividerModule],
    templateUrl: './connections.component.html',
    styleUrl: './connections.component.scss'
})
export class ConnectionsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}