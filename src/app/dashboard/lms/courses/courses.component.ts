import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, RouterLinkActive, MatTooltipModule],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss'
})
export class CoursesComponent {

    displayedColumns: string[] = ['id', 'courseName', 'category', 'instructor', 'enrolledStudents', 'startDate', 'endDate', 'price', 'action'];
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

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#258',
        courseName: 'Introduction to python',
        category: 'Technology',
        instructor: 'Ann Cohen',
        enrolledStudents: '120',
        startDate: '01 Aug, 2023',
        endDate: '30 Dec, 2023',
        price: '$30.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#648',
        courseName: 'Data science fundamentals',
        category: 'Science',
        instructor: 'Lea Lewis',
        enrolledStudents: '99',
        startDate: '15 Aug,  2023',
        endDate: '15 Dec, 2023',
        price: '$25.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#945',
        courseName: 'Graphic design basics',
        category: 'Arts & design',
        instructor: 'Lillie Walker',
        enrolledStudents: '75',
        startDate: '01 Sep, 2023',
        endDate: '30 Nov, 2023',
        price: '$19.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#186',
        courseName: 'Web development basics',
        category: 'Technology',
        instructor: 'Lynn Flinn',
        enrolledStudents: '140',
        startDate: '15 Sep, 2023',
        endDate: '30 Dec, 2023',
        price: '$14.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#439',
        courseName: 'Business finance',
        category: 'Business',
        instructor: 'Mark Rivera',
        enrolledStudents: '50',
        startDate: '01 Oct, 2023',
        endDate: '30 Dec, 2023',
        price: '$20.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#752',
        courseName: 'Advanced app development',
        category: 'Technology',
        instructor: 'Chad Campos',
        enrolledStudents: '90',
        startDate: '15 Oct, 2023',
        endDate: '30 Dec, 2023',
        price: '$22.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#752',
        courseName: 'Advanced app development',
        category: 'Technology',
        instructor: 'Chad Campos',
        enrolledStudents: '90',
        startDate: '15 Oct, 2023',
        endDate: '30 Dec, 2023',
        price: '$22.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#439',
        courseName: 'Business finance',
        category: 'Business',
        instructor: 'Mark Rivera',
        enrolledStudents: '50',
        startDate: '01 Oct, 2023',
        endDate: '30 Dec, 2023',
        price: '$20.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#186',
        courseName: 'Web development basics',
        category: 'Technology',
        instructor: 'Lynn Flinn',
        enrolledStudents: '140',
        startDate: '15 Sep, 2023',
        endDate: '30 Dec, 2023',
        price: '$14.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#945',
        courseName: 'Graphic design basics',
        category: 'Arts & design',
        instructor: 'Lillie Walker',
        enrolledStudents: '75',
        startDate: '01 Sep, 2023',
        endDate: '30 Nov, 2023',
        price: '$19.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#648',
        courseName: 'Data science fundamentals',
        category: 'Science',
        instructor: 'Lea Lewis',
        enrolledStudents: '99',
        startDate: '15 Aug,  2023',
        endDate: '15 Dec, 2023',
        price: '$25.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#258',
        courseName: 'Introduction to python',
        category: 'Technology',
        instructor: 'Ann Cohen',
        enrolledStudents: '120',
        startDate: '01 Aug, 2023',
        endDate: '30 Dec, 2023',
        price: '$30.99',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    id: string;
    courseName: string;
    category: string;
    instructor: string;
    enrolledStudents: string;
    startDate: string;
    endDate: string;
    price: string;
    action: any;
}