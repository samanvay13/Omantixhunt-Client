import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-coming-soon-page',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule],
    templateUrl: './coming-soon-page.component.html',
    styleUrl: './coming-soon-page.component.scss'
})
export class ComingSoonPageComponent implements OnInit, OnDestroy {

    private countdownInterval: any;
    public countdown: { days: number, hours: number, minutes: number, seconds: number };

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        // Set your target date and time for the countdown
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        // Update the countdown every second
        this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
            // Countdown has ended, do something here
            this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(this.countdownInterval);
        }
        }, 1000);
    }

    ngOnDestroy(): void {
        // Clear the interval to prevent memory leaks
        clearInterval(this.countdownInterval);
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}