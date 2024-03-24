import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-refunds',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './e-refunds.component.html',
    styleUrl: './e-refunds.component.scss'
})
export class ERefundsComponent {

    displayedColumns: string[] = ['orderId', 'customer', 'date', 'noOrdersReturned', 'noOrdersRefunded', 'noOrdersReplaced', 'totalRefunded', 'totalReplaced'];
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
        date: 'Nov 10, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 1,
        noOrdersReplaced: 0,
        totalRefunded: '$42.00',
        totalReplaced: '$50.00'
    },
    {
        orderId: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        date: 'Nov 11, 2023',
        noOrdersReturned: 1,
        noOrdersRefunded: 1,
        noOrdersReplaced: 0,
        totalRefunded: '$32.00',
        totalReplaced: '$54.00'
    },
    {
        orderId: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        date: 'Nov 12, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 7,
        noOrdersReplaced: 4,
        totalRefunded: '$53.00',
        totalReplaced: '$67.00'
    },
    {
        orderId: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        date: 'Nov 13, 2023',
        noOrdersReturned: 3,
        noOrdersRefunded: 1,
        noOrdersReplaced: 2,
        totalRefunded: '$42.00',
        totalReplaced: '$56.00'
    },
    {
        orderId: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        date: 'Nov 14, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 2,
        noOrdersReplaced: 7,
        totalRefunded: '$24.00',
        totalReplaced: '$45.00'
    },
    {
        orderId: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        date: 'Nov 15, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 6,
        noOrdersReplaced: 2,
        totalRefunded: '$53.00',
        totalReplaced: '$56.00'
    },
    {
        orderId: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        date: 'Nov 16, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 6,
        noOrdersReplaced: 1,
        totalRefunded: '$52.00',
        totalReplaced: '$67.00'
    },
    {
        orderId: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        date: 'Nov 17, 2023',
        noOrdersReturned: 6,
        noOrdersRefunded: 5,
        noOrdersReplaced: 4,
        totalRefunded: '$42.00',
        totalReplaced: '$46.00'
    },
    {
        orderId: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        date: 'Nov 18, 2023',
        noOrdersReturned: 7,
        noOrdersRefunded: 2,
        noOrdersReplaced: 5,
        totalRefunded: '$44.00',
        totalReplaced: '$68.00'
    },
    {
        orderId: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        date: 'Nov 19, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 1,
        noOrdersReplaced: 6,
        totalRefunded: '$99.00',
        totalReplaced: '$742.00'
    },
    {
        orderId: '#ARP-4652',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        date: 'Nov 19, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 1,
        noOrdersReplaced: 6,
        totalRefunded: '$99.00',
        totalReplaced: '$742.00'
    },
    {
        orderId: '#ARP-7642',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        date: 'Nov 18, 2023',
        noOrdersReturned: 7,
        noOrdersRefunded: 2,
        noOrdersReplaced: 5,
        totalRefunded: '$44.00',
        totalReplaced: '$68.00'
    },
    {
        orderId: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        date: 'Nov 17, 2023',
        noOrdersReturned: 6,
        noOrdersRefunded: 5,
        noOrdersReplaced: 4,
        totalRefunded: '$42.00',
        totalReplaced: '$46.00'
    },
    {
        orderId: '#ARP-7612',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        date: 'Nov 16, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 6,
        noOrdersReplaced: 1,
        totalRefunded: '$52.00',
        totalReplaced: '$67.00'
    },
    {
        orderId: '#ARP-7346',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        date: 'Nov 15, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 6,
        noOrdersReplaced: 2,
        totalRefunded: '$53.00',
        totalReplaced: '$56.00'
    },
    {
        orderId: '#ARP-4619',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        date: 'Nov 14, 2023',
        noOrdersReturned: 5,
        noOrdersRefunded: 2,
        noOrdersReplaced: 7,
        totalRefunded: '$24.00',
        totalReplaced: '$45.00'
    },
    {
        orderId: '#ARP-7342',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        date: 'Nov 13, 2023',
        noOrdersReturned: 3,
        noOrdersRefunded: 1,
        noOrdersReplaced: 2,
        totalRefunded: '$42.00',
        totalReplaced: '$56.00'
    },
    {
        orderId: '#ARP-2951',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        date: 'Nov 12, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 7,
        noOrdersReplaced: 4,
        totalRefunded: '$53.00',
        totalReplaced: '$67.00'
    },
    {
        orderId: '#ARP-1364',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        date: 'Nov 11, 2023',
        noOrdersReturned: 1,
        noOrdersRefunded: 1,
        noOrdersReplaced: 0,
        totalRefunded: '$32.00',
        totalReplaced: '$54.00'
    },
    {
        orderId: '#ARP-1217',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        date: 'Nov 10, 2023',
        noOrdersReturned: 2,
        noOrdersRefunded: 1,
        noOrdersReplaced: 0,
        totalRefunded: '$42.00',
        totalReplaced: '$50.00'
    }
];

export interface PeriodicElement {
    orderId: string;
    customer: any;
    date: string;
    noOrdersReturned: number;
    noOrdersRefunded: number;
    noOrdersReplaced: number;
    totalRefunded: string;
    totalReplaced: string;
}