import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-color-picker',
    standalone: true,
    imports: [RouterLink, MatCardModule, ColorPickerModule],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {

    // Color Picker
    color: any;
    color2: any;
    color3: any;
    color4: any;
    color5: any;
    color6: any;
    color7: any;
    color8: any;
    color9: any;
    color10: any;
    color11: any;

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