import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
	selector: 'app-working-schedule:not(p)',
	standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
	templateUrl: './working-schedule.component.html',
	styleUrl: './working-schedule.component.scss'
})
export class WorkingScheduleComponent {

    // Mat Calendar
    selected: Date | null;

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

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