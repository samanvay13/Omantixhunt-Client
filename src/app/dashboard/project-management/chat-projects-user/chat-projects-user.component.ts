import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-chat-projects-user',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule],
    templateUrl: './chat-projects-user.component.html',
    styleUrl: './chat-projects-user.component.scss'
})
export class ChatProjectsUserComponent {

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