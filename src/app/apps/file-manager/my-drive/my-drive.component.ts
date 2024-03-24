import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
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
    selector: 'app-my-drive',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, SidebarComponent, MatButtonModule, RouterLink, MatTableModule, MatCheckboxModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './my-drive.component.html',
    styleUrl: './my-drive.component.scss'
})
export class MyDriveComponent {

    displayedColumns: string[] = ['select', 'folderName', 'owner', 'listedDate', 'fileSize', 'fileItems', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.folderName + 1}`;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

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

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        folderName: 'Dashboard design file',
        owner: 'Linda Maddox',
        listedDate: 'Nov 20, 2023',
        fileSize: '1.2 GB',
        fileItems: 69,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Important documents',
        owner: 'Juanita Lavigne',
        listedDate: 'Nov 18, 2023',
        fileSize: '2.6 GB',
        fileItems: 236,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Product design',
        owner: 'Roy Pope',
        listedDate: 'Nov 17, 2023',
        fileSize: '3.2 GB',
        fileItems: 365,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Dashboard design file',
        owner: 'Cecil Jones',
        listedDate: 'Nov 15, 2023',
        fileSize: '1 GB',
        fileItems: 25,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Media files',
        owner: 'Trudy Venegas',
        listedDate: 'Nov 14, 2023',
        fileSize: '1.5 GB',
        fileItems: 153,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Graphic design file',
        owner: 'Sharilyn Goodall',
        listedDate: 'Nov 13, 2023',
        fileSize: '1.6 GB',
        fileItems: 142,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Personal photo',
        owner: 'Annie Carver',
        listedDate: 'Nov 9, 2023',
        fileSize: '1.2 GB',
        fileItems: 175,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Audio file',
        owner: 'Winona Etzel',
        listedDate: 'Nov 8, 2023',
        fileSize: '1.3 GB',
        fileItems: 136,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'English learning files',
        owner: 'Thomas Lane',
        listedDate: 'Nov 6, 2023',
        fileSize: '1.1 GB',
        fileItems: 65,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        folderName: 'Mix projects design files',
        owner: 'Edward Goodman',
        listedDate: 'Nov 5, 2023',
        fileSize: '1.2 GB',
        fileItems: 88,
        action: {
            download: 'sim_card_download',
            edit: 'edit',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    folderName: string;
    owner: string;
    listedDate: string;
    fileSize: string;
    fileItems: number;
    action: any;
}