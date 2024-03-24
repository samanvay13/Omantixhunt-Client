import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-create-order',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule],
    templateUrl: './e-create-order.component.html',
    styleUrl: './e-create-order.component.scss'
})
export class ECreateOrderComponent {

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