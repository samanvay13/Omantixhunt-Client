import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-enrolled-students',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatProgressBarModule],
    templateUrl: './enrolled-students.component.html',
    styleUrl: './enrolled-students.component.scss'
})
export class EnrolledStudentsComponent {

    displayedColumns: string[] = ['userID', 'student', 'email'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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

const ELEMENT_DATA: PeriodicElement[] = [
    {
        userID: '#ARP-158',
        student: {
            img: 'assets/images/users/user15.jpg',
            name: 'Walter Frazier'
        },
        email: 'walter@example.com'
    },
    {
        userID: '#ARP-132',
        student: {
            img: 'assets/images/users/user7.jpg',
            name: 'Kimberly Anderson'
        },
        email: 'kimberly@example.com'
    },
    {
        userID: '#ARP-142',
        student: {
            img: 'assets/images/users/user5.jpg',
            name: 'Roscoe Guerrero'
        },
        email: 'roscoe@example.com'
    },
    {
        userID: '#ARP-125',
        student: {
            img: 'assets/images/users/user12.jpg',
            name: 'Robert Stewart'
        },
        email: 'robert@example.com'
    },
    {
        userID: '#ARP-176',
        student: {
            img: 'assets/images/users/user15.jpg',
            name: 'Walter Frazier'
        },
        email: 'walter@example.com'
    },
    {
        userID: '#ARP-199',
        student: {
            img: 'assets/images/users/user7.jpg',
            name: 'Kimberly Anderson'
        },
        email: 'kimberly@example.com'
    },
    {
        userID: '#ARP-162',
        student: {
            img: 'assets/images/users/user5.jpg',
            name: 'Roscoe Guerrero'
        },
        email: 'roscoe@example.com'
    },
    {
        userID: '#ARP-187',
        student: {
            img: 'assets/images/users/user12.jpg',
            name: 'Robert Stewart'
        },
        email: 'robert@example.com'
    }
];
export interface PeriodicElement {
    userID: string;
    student: any;
    email: string;
}