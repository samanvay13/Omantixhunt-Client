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
    selector: 'app-e-orders',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './e-orders.component.html',
    styleUrl: './e-orders.component.scss'
})
export class EOrdersComponent {

    displayedColumns: string[] = ['select', 'orderId', 'customer', 'items', 'price', 'date', 'vendor', 'status', 'action'];
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
        orderId: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        items: 120,
        price: '$6855.00',
        date: 'Nov 10, 2023',
        vendor: 'Dennis Matthews',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        items: 62,
        price: '$258.00',
        date: 'Nov 11, 2023',
        vendor: 'Susan Rader',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        items: 49,
        price: '$3,890.00',
        date: 'Nov 12, 2023',
        vendor: 'Douglas Harvey',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        items: 25,
        price: '$2,500.00',
        date: 'Nov 13, 2023',
        vendor: 'John Valdez',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        items: 82,
        price: '$8,200.00',
        date: 'Nov 14, 2023',
        vendor: 'Kathryn Turner',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        items: 64,
        price: '$640.00',
        date: 'Nov 15, 2023',
        vendor: 'Ilona Slover',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        items: 91,
        price: '$9,100.00',
        date: 'Nov 16, 2023',
        vendor: 'Melanie Goldman',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        items: 73,
        price: '$7,300.00',
        date: 'Nov 17, 2023',
        vendor: 'Norma Collett',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        items: 66,
        price: '$6,600.00',
        date: 'Nov 18, 2023',
        vendor: 'Lucy Sturgill',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7895',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        items: 28,
        price: '$2,800.00',
        date: 'Nov 19, 2023',
        vendor: 'Shirley Scott',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7895',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        items: 28,
        price: '$2,800.00',
        date: 'Nov 19, 2023',
        vendor: 'Shirley Scott',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        items: 66,
        price: '$6,600.00',
        date: 'Nov 18, 2023',
        vendor: 'Lucy Sturgill',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        items: 73,
        price: '$7,300.00',
        date: 'Nov 17, 2023',
        vendor: 'Norma Collett',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        items: 91,
        price: '$9,100.00',
        date: 'Nov 16, 2023',
        vendor: 'Melanie Goldman',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        items: 64,
        price: '$640.00',
        date: 'Nov 15, 2023',
        vendor: 'Ilona Slover',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        items: 82,
        price: '$8,200.00',
        date: 'Nov 14, 2023',
        vendor: 'Kathryn Turner',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        items: 25,
        price: '$2,500.00',
        date: 'Nov 13, 2023',
        vendor: 'John Valdez',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        items: 49,
        price: '$3,890.00',
        date: 'Nov 12, 2023',
        vendor: 'Douglas Harvey',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        items: 62,
        price: '$258.00',
        date: 'Nov 11, 2023',
        vendor: 'Susan Rader',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        orderId: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        items: 120,
        price: '$6855.00',
        date: 'Nov 10, 2023',
        vendor: 'Dennis Matthews',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];

export interface PeriodicElement {
    orderId: string;
    customer: any;
    items: number;
    price: string;
    date: string;
    vendor: string;
    status: any;
    action: any;
}