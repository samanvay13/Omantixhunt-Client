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
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

    displayedColumns: string[] = ['select', 'contactID', 'customer', 'email', 'phone', 'lastContacted', 'company', 'leadScore', 'status', 'action'];
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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.customer + 1}`;
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
        contactID: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        phone: '+1 555-123-4567',
        lastContacted: 'Nov 10, 2023',
        company: 'ABC Corporation',
        leadScore: 50,
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
        contactID: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        phone: '+1 555-987-6543',
        lastContacted: 'Nov 11, 2023',
        company: 'XYZ Ltd',
        leadScore: 35,
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
        contactID: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        phone: '+1 555-456-7890',
        lastContacted: 'Nov 12, 2023',
        company: 'Tech Solutions',
        leadScore: 40,
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
        contactID: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        phone: '+1 555-369-7878',
        lastContacted: 'Nov 13, 2023',
        company: 'Global Solutions',
        leadScore: 25,
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
        contactID: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        phone: '+1 555-658-4488',
        lastContacted: 'Nov 14, 2023',
        company: 'Acma Industries',
        leadScore: 27,
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
        contactID: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        phone: '+1 555-558-9966',
        lastContacted: 'Nov 15, 2023',
        company: 'Synergy Ltd',
        leadScore: 16,
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
        contactID: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        phone: '+1 555-357-5888',
        lastContacted: 'Nov 16, 2023',
        company: 'Summit Solutions',
        leadScore: 38,
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
        contactID: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        phone: '+1 555-456-8877',
        lastContacted: 'Nov 17, 2023',
        company: 'Strategies Ltd',
        leadScore: 15,
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
        contactID: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        phone: '+1 555-622-4488',
        lastContacted: 'Nov 18, 2023',
        company: 'Tech Enterprises',
        leadScore: 41,
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
        contactID: '#ARP-7895',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        phone: '+1 555-225-4488',
        lastContacted: 'Nov 19, 2023',
        company: 'Synetic Solutions',
        leadScore: 29,
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
        contactID: '#ARP-7895',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        phone: '+1 555-225-4488',
        lastContacted: 'Nov 19, 2023',
        company: 'Synetic Solutions',
        leadScore: 29,
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
        contactID: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        phone: '+1 555-622-4488',
        lastContacted: 'Nov 18, 2023',
        company: 'Tech Enterprises',
        leadScore: 41,
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
        contactID: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        phone: '+1 555-456-8877',
        lastContacted: 'Nov 17, 2023',
        company: 'Strategies Ltd',
        leadScore: 15,
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
        contactID: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        phone: '+1 555-357-5888',
        lastContacted: 'Nov 16, 2023',
        company: 'Summit Solutions',
        leadScore: 38,
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
        contactID: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        phone: '+1 555-558-9966',
        lastContacted: 'Nov 15, 2023',
        company: 'Synergy Ltd',
        leadScore: 16,
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
        contactID: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        phone: '+1 555-658-4488',
        lastContacted: 'Nov 14, 2023',
        company: 'Acma Industries',
        leadScore: 27,
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
        contactID: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        phone: '+1 555-369-7878',
        lastContacted: 'Nov 13, 2023',
        company: 'Global Solutions',
        leadScore: 25,
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
        contactID: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        phone: '+1 555-456-7890',
        lastContacted: 'Nov 12, 2023',
        company: 'Tech Solutions',
        leadScore: 40,
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
        contactID: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        phone: '+1 555-987-6543',
        lastContacted: 'Nov 11, 2023',
        company: 'XYZ Ltd',
        leadScore: 35,
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
        contactID: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        phone: '+1 555-123-4567',
        lastContacted: 'Nov 10, 2023',
        company: 'ABC Corporation',
        leadScore: 50,
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
    contactID: string;
    customer: any;
    email: string;
    phone: string;
    lastContacted: string;
    company: string;
    leadScore: number;
    status: any;
    action: any;
}