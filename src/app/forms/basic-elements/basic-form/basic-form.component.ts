import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-basic-form',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule, MatIconModule],
    templateUrl: './basic-form.component.html',
    styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {

    // Password Hide
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // isToggled
    isToggled = false;

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}