import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, SidebarComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

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