import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-lbw-disabled-options',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CdkListbox, CdkOption],
    templateUrl: './lbw-disabled-options.component.html',
    styleUrl: './lbw-disabled-options.component.scss'
})
export class LbwDisabledOptionsComponent {

    canDrinkCtrl = new FormControl(false);

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