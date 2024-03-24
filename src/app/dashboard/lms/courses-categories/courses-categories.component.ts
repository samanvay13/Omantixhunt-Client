import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-courses-categories',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './courses-categories.component.html',
    styleUrl: './courses-categories.component.scss'
})
export class CoursesCategoriesComponent {

    displayedColumns: string[] = ['course', 'enrolled', 'linkbtn'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
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

const ELEMENT_DATA: PeriodicElement[] = [
    {
        course: {
            img: 'assets/images/courses/course1.jpg',
            name: 'Technology',
            number: '30+ Courses'
        },
        enrolled: 'Enrolled 950',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course2.jpg',
            name: 'Business',
            number: '75+ Courses'
        },
        enrolled: 'Enrolled 4586',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course3.jpg',
            name: 'Language',
            number: '45+ Courses'
        },
        enrolled: 'Enrolled 759',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course4.jpg',
            name: 'Science',
            number: '55+ Courses'
        },
        enrolled: 'Enrolled 8542',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course5.jpg',
            name: 'Arts & Design',
            number: '80+ Courses'
        },
        enrolled: 'Enrolled 2485',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course6.jpg',
            name: 'UI/UX',
            number: '25+ Courses'
        },
        enrolled: 'Enrolled 869',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course6.jpg',
            name: 'UI/UX',
            number: '25+ Courses'
        },
        enrolled: 'Enrolled 869',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course4.jpg',
            name: 'Science',
            number: '55+ Courses'
        },
        enrolled: 'Enrolled 8542',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course2.jpg',
            name: 'Business',
            number: '75+ Courses'
        },
        enrolled: 'Enrolled 4586',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course3.jpg',
            name: 'Language',
            number: '45+ Courses'
        },
        enrolled: 'Enrolled 759',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course1.jpg',
            name: 'Technology',
            number: '30+ Courses'
        },
        enrolled: 'Enrolled 950',
        linkbtn: 'lms-page'
    },
    {
        course: {
            img: 'assets/images/courses/course5.jpg',
            name: 'Arts & Design',
            number: '80+ Courses'
        },
        enrolled: 'Enrolled 2485',
        linkbtn: 'lms-page'
    }
];

export interface PeriodicElement {
    course: any;
    enrolled: string;
    linkbtn: string;
}