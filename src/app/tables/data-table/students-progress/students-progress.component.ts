import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-students-progress:not(p)',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, MatProgressBarModule],
    templateUrl: './students-progress.component.html',
    styleUrl: './students-progress.component.scss'
})
export class StudentsProgressComponent {

    displayedColumns: string[] = ['id', 'name', 'courseName', 'progress'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // isToggled
    isToggled = false;

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#258',
        name: 'Andrew Allen',
        courseName: 'Introduction to Python',
        progress: '75'
    },
    {
        id: '#957',
        name: 'Russell Colon',
        courseName: 'Web Development',
        progress: '55'
    },
    {
        id: '#835',
        name: 'Cecil Batts',
        courseName: 'Data Science',
        progress: '65'
    },
    {
        id: '#761',
        name: 'Linda Ball',
        courseName: 'Graphic Design Basics',
        progress: '90'
    },
    {
        id: '#684',
        name: 'Frank Mele',
        courseName: 'Business Finance',
        progress: '70'
    },
    {
        id: '#684',
        name: 'Frank Mele',
        courseName: 'Business Finance',
        progress: '70'
    },
    {
        id: '#761',
        name: 'Linda Ball',
        courseName: 'Graphic Design Basics',
        progress: '90'
    },
    {
        id: '#835',
        name: 'Cecil Batts',
        courseName: 'Data Science',
        progress: '65'
    },
    {
        id: '#957',
        name: 'Russell Colon',
        courseName: 'Web Development',
        progress: '55'
    },
    {
        id: '#258',
        name: 'Andrew Allen',
        courseName: 'Introduction to Python',
        progress: '75'
    }
];

export interface PeriodicElement {
    id: string;
    name: string;
    courseName: string;
    progress: any;
}