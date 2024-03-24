import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [RouterLink, WorkingScheduleComponent, MatButtonModule, MatMenuModule, MatCardModule, FullCalendarModule],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

    // Calendar
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        dayMaxEvents: true, // when too many events in a day, show the popover
        weekends: true,
        events: [
            {
                title: 'Meeting with Developers',
                date: '2024-01-01'
            },
            {
                title: 'Consultation with Employees',
                date: '2024-01-06'
            },
            {
                title: 'Call for payment Project NOK',
                date: '2024-01-09'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-01-18'
            },
            {
                title: 'Consultation with Doctor',
                date: '2024-01-24'
            },
            {
                title: 'Annual Conference 2023',
                date: '2024-01-28'
            },
            {
                title: 'Meeting with Developers',
                date: '2024-02-01'
            },
            {
                title: 'Consultation with Employees',
                date: '2024-02-06'
            },
            {
                title: 'Call for payment Project NOK',
                date: '2024-03-09'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-03-18'
            },
            {
                title: 'Consultation with Doctor',
                date: '2024-03-24'
            },
            {
                title: 'Annual Conference 2023',
                date: '2024-04-28'
            },
            {
                title: 'Meeting with Developers',
                date: '2024-04-01'
            },
            {
                title: 'Consultation with Employees',
                date: '2024-05-06'
            },
            {
                title: 'Call for payment Project NOK',
                date: '2024-05-09'
            },
            {
                title: 'Meeting with UI/UX Designers',
                date: '2024-06-18'
            },
            {
                title: 'Consultation with Doctor',
                date: '2024-06-24'
            },
            {
                title: 'Annual Conference 2023',
                date: '2024-07-28'
            }
        ],
        plugins: [dayGridPlugin]
    };

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