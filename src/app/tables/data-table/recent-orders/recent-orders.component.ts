import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recent-orders:not(p)',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatTooltipModule],
    templateUrl: './recent-orders.component.html',
    styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent {

    displayedColumns: string[] = ['orderID', 'customer', 'createdDate', 'totalPrice', 'profit', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        orderID: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Carlos Daley'
        },
        createdDate: '15 Nov, 2023',
        totalPrice: '$9,095',
        profit: '$1,254',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-9513',
        customer: {
            img: 'assets/images/users/user2.jpg',
            name: 'Dorothy Young'
        },
        createdDate: '14 Nov, 2023',
        totalPrice: '$8,564',
        profit: '$973',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-7513',
        customer: {
            img: 'assets/images/users/user3.jpg',
            name: 'Greg Woody'
        },
        createdDate: '13 Nov, 2023',
        totalPrice: '$7,985',
        profit: '$852',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-3579',
        customer: {
            img: 'assets/images/users/user4.jpg',
            name: 'Deborah Rosol'
        },
        createdDate: '12 Nov, 2023',
        totalPrice: '$7,362',
        profit: '$793',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-4826',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Kendall Allen'
        },
        createdDate: '11 Nov, 2023',
        totalPrice: '$6,597',
        profit: '$674',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-1324',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Mark Stjohn'
        },
        createdDate: '10 Nov, 2023',
        totalPrice: '$4,321',
        profit: '$254',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-4235',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Joan Stanley'
        },
        createdDate: '09 Nov, 2023',
        totalPrice: '$3,231',
        profit: '$202',
        status: {
            shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-4532',
        customer: {
            img: 'assets/images/users/user8.jpg',
            name: 'Jacob Bell'
        },
        createdDate: '08 Nov, 2023',
        totalPrice: '$3,531',
        profit: '$421',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-1342',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Donald Bryan'
        },
        createdDate: '07 Nov, 2023',
        totalPrice: '$5,632',
        profit: '$456',
        status: {
            // shipped: 'Shipped',
            confirmed: 'Confirmed',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        orderID: '#ARP-5313',
        customer: {
            img: 'assets/images/users/user10.jpg',
            name: 'Kristina Blomquist'
        },
        createdDate: '06 Nov, 2023',
        totalPrice: '$1,353',
        profit: '$33',
        status: {
            // shipped: 'Shipped',
            // confirmed: 'Confirmed',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    orderID: string;
    customer: any;
    createdDate: string;
    totalPrice: string;
    profit: string;
    status: any;
    action: any;
}