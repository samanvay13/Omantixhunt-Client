import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-inbox',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, SidebarComponent, MatPaginatorModule],
    templateUrl: './inbox.component.html',
    styleUrl: './inbox.component.scss'
})
export class InboxComponent {

    displayedColumns: string[] = ['select', 'title', 'description', 'date'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Whether the number of selected elements matches the total number of rows.
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    // Selects all rows if they are not all selected; otherwise clear selection.
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    // The label for the checkbox on the passed row
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
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
        title: 'Facebook',
        description: 'Exclusive Product Offer on Facebook - Limited Time Only!',
        date: '20 Nov, 2023'
    },
    {
        title: 'Dribbble',
        description: 'Get 70% off Dribbble Pro for Cyber Monday! Today',
        date: '19 Nov, 2023'
    },
    {
        title: 'Instagram',
        description: 'Dictum mauris vestibulum proin velit turpis integer tellus tellus.',
        date: '18 Nov, 2023'
    },
    {
        title: 'LinkedIn',
        description: 'Convallis aenean egestas vitae ullamcorper aliquet luctus. Ipsum turpis sociis dolor eget lectus sed.',
        date: '17 Nov, 2023'
    },
    {
        title: 'Shanell Rice',
        description: 'Dictumst gravida nulla sed vitae eget adipiscing eros. Fermentum bibendum morbi in sed amet.',
        date: '16 Nov, 2023'
    },
    {
        title: 'J. Pinkman, Me (12)',
        description: 'A ac et nisl proin quam lacus. Vitae tempor non imperdiet sed habitasse adipiscing scelerisque risus porttitor.',
        date: '15 Nov, 2023'
    },
    {
        title: 'D. Warner, Me (10)',
        description: 'Volutpat cursus enim fames magna aliquam facilisis commodo purus.',
        date: '14 Nov, 2023'
    },
    {
        title: 'Daily UI/UX Design',
        description: 'Tincidunt rhoncus risus id elit. Volutpat risus ut nunc bibendum.',
        date: '13 Nov, 2023'
    },
    {
        title: 'Google',
        description: 'Scelerisque orci sed lorem vel non dignissim elementum volutpat.',
        date: '12 Nov, 2023'
    },
    {
        title: 'Website weekly',
        description: 'Faucibus non curabitur felis dignissim urna est. Amet accumsan suspendisse amet commodo sagittis.',
        date: '11 Nov, 2023'
    },
    {
        title: 'Website weekly',
        description: 'Faucibus non curabitur felis dignissim urna est. Amet accumsan suspendisse amet commodo sagittis.',
        date: '11 Nov, 2023'
    },
    {
        title: 'Google',
        description: 'Scelerisque orci sed lorem vel non dignissim elementum volutpat.',
        date: '12 Nov, 2023'
    },
    {
        title: 'D. Warner, Me (10)',
        description: 'Volutpat cursus enim fames magna aliquam facilisis commodo purus.',
        date: '14 Nov, 2023'
    },
    {
        title: 'Facebook',
        description: 'Exclusive Product Offer on Facebook - Limited Time Only!',
        date: '20 Nov, 2023'
    },
    {
        title: 'J. Pinkman, Me (12)',
        description: 'A ac et nisl proin quam lacus. Vitae tempor non imperdiet sed habitasse adipiscing scelerisque risus porttitor.',
        date: '15 Nov, 2023'
    },
    {
        title: 'Shanell Rice',
        description: 'Dictumst gravida nulla sed vitae eget adipiscing eros. Fermentum bibendum morbi in sed amet.',
        date: '16 Nov, 2023'
    },
    {
        title: 'LinkedIn',
        description: 'Convallis aenean egestas vitae ullamcorper aliquet luctus. Ipsum turpis sociis dolor eget lectus sed.',
        date: '17 Nov, 2023'
    },
    {
        title: 'Instagram',
        description: 'Dictum mauris vestibulum proin velit turpis integer tellus tellus.',
        date: '18 Nov, 2023'
    },
    {
        title: 'Dribbble',
        description: 'Get 70% off Dribbble Pro for Cyber Monday! Today',
        date: '19 Nov, 2023'
    },
    {
        title: 'Facebook',
        description: 'Exclusive Product Offer on Facebook - Limited Time Only!',
        date: '20 Nov, 2023'
    }
];

export interface PeriodicElement {
    title: string;
    description: string;
    date: string;
}