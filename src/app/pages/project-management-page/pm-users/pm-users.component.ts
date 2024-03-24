import { NgIf } from '@angular/common';
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
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-pm-users',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './pm-users.component.html',
    styleUrl: './pm-users.component.scss'
})
export class PmUsersComponent {

    displayedColumns: string[] = ['select', 'userID', 'fullName', 'email', 'role', 'projectAccess', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fullName + 1}`;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        userID: '#ARP-1217',
        fullName: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        role: 'Project manager',
        projectAccess: 'Hotel management system, Python upgrade',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-1364',
        fullName: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        role: 'Developer',
        projectAccess: 'Project monitoring, Project alpho ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-2951',
        fullName: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        role: 'Business analyst',
        projectAccess: 'Aegis accounting service, Beja banking finance ',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7342',
        fullName: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        role: 'UI/UX designer',
        projectAccess: 'Aoriv ai design,  Vaxo app design',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-4619',
        fullName: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        role: 'QA tester',
        projectAccess: 'Product development, Daxa dashboard design',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7346',
        fullName: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        role: 'Admin',
        projectAccess: 'Hotel management system, Python upgrade',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7612',
        fullName: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        role: 'Editor',
        projectAccess: 'Aegis accounting service, Beja banking finance ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7642',
        fullName: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        role: 'Project manager',
        projectAccess: 'Project monitoring, Project alpho ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-4652',
        fullName: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        role: 'UI/UX designer',
        projectAccess: 'Product development, Daxa dashboard design',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7895',
        fullName: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        role: 'Web developer',
        projectAccess: 'Aoriv ai design,  Vaxo app design',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7895',
        fullName: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        role: 'Web developer',
        projectAccess: 'Aoriv ai design,  Vaxo app design',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-4652',
        fullName: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        role: 'UI/UX designer',
        projectAccess: 'Product development, Daxa dashboard design',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7642',
        fullName: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        role: 'Project manager',
        projectAccess: 'Project monitoring, Project alpho ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7612',
        fullName: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        role: 'Editor',
        projectAccess: 'Aegis accounting service, Beja banking finance ',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7346',
        fullName: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        role: 'Admin',
        projectAccess: 'Hotel management system, Python upgrade',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-4619',
        fullName: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        role: 'QA tester',
        projectAccess: 'Product development, Daxa dashboard design',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-7342',
        fullName: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        role: 'UI/UX designer',
        projectAccess: 'Aoriv ai design,  Vaxo app design',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-2951',
        fullName: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        role: 'Business analyst',
        projectAccess: 'Aegis accounting service, Beja banking finance ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-1364',
        fullName: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        role: 'Developer',
        projectAccess: 'Project monitoring, Project alpho ',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        userID: '#ARP-1217',
        fullName: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        role: 'Project manager',
        projectAccess: 'Hotel management system, Python upgrade',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    userID: string;
    fullName: any;
    email: string;
    role: string;
    projectAccess: string;
    status: any;
    action: any;
}