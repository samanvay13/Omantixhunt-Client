import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { LbwComplexObjectAsValuesComponent } from './lbw-complex-object-as-values/lbw-complex-object-as-values.component';
import { LbwDisabledOptionsComponent } from './lbw-disabled-options/lbw-disabled-options.component';
import { LbwFormsValidationComponent } from './lbw-forms-validation/lbw-forms-validation.component';
import { HorizontalListboxComponent } from './horizontal-listbox/horizontal-listbox.component';
import { LbwReactiveFormsComponent } from './lbw-reactive-forms/lbw-reactive-forms.component';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-listbox',
    standalone: true,
    imports: [RouterLink, MatCardModule, CdkListbox, CdkOption, LbwComplexObjectAsValuesComponent, LbwDisabledOptionsComponent, LbwFormsValidationComponent, HorizontalListboxComponent, LbwReactiveFormsComponent],
    templateUrl: './listbox.component.html',
    styleUrl: './listbox.component.scss'
})
export class ListboxComponent {

    features = ['Hydrodynamic', 'Port & Starboard Attachments', 'Turbo Drive'];

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