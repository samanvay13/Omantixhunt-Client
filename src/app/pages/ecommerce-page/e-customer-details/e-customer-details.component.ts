import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-customer-details',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './e-customer-details.component.html',
    styleUrl: './e-customer-details.component.scss'
})
export class ECustomerDetailsComponent {

    displayedColumns: string[] = ['orderID', 'status', 'amount', 'rewards', 'date'];
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
        orderID: '#ARP-1217',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$6855.00',
        rewards: '$12.00',
        date: '14 Jan 2024'
    },
    {
        orderID: '#ABC-1231',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$258.00',
        rewards: '$9.00',
        date: '13 Jan 2024'
    },
    {
        orderID: '#VGS-4123',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$3,890.00',
        rewards: '$11.00',
        date: '12 Jan 2024'
    },
    {
        orderID: '#FES-4212',
        status: {
            // successful: 'Successful',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        amount: '$2,500.00',
        rewards: '$23.42',
        date: '11 Jan 2024'
    },
    {
        orderID: '#FDA-1234',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$8,200.00',
        rewards: '$10.84',
        date: '10 Jan 2024'
    },
    {
        orderID: '#DSE-5421',
        status: {
            // successful: 'Successful',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        amount: '$640.00',
        rewards: '$3.21',
        date: '09 Jan 2024'
    },
    {
        orderID: '#GTR-3123',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$9,100.00',
        rewards: '$43.21',
        date: '08 Jan 2024'
    },
    {
        orderID: '#AWS-1264',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$7,300.00',
        rewards: '$42.42',
        date: '07 Jan 2024'
    },
    {
        orderID: '#DXA-1963',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$6,600.00',
        rewards: '$11.21',
        date: '06 Jan 2024'
    },
    {
        orderID: '#FFSA-3451',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$2,800.00',
        rewards: '$14.32',
        date: '05 Jan 2024'
    },
    {
        orderID: '#FFSA-3451',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$2,800.00',
        rewards: '$14.32',
        date: '05 Jan 2024'
    },
    {
        orderID: '#DXA-1963',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$6,600.00',
        rewards: '$11.21',
        date: '06 Jan 2024'
    },
    {
        orderID: '#AWS-1264',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$7,300.00',
        rewards: '$42.42',
        date: '07 Jan 2024'
    },
    {
        orderID: '#GTR-3123',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$9,100.00',
        rewards: '$43.21',
        date: '08 Jan 2024'
    },
    {
        orderID: '#DSE-5421',
        status: {
            // successful: 'Successful',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        amount: '$640.00',
        rewards: '$3.21',
        date: '09 Jan 2024'
    },
    {
        orderID: '#FDA-1234',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$8,200.00',
        rewards: '$10.84',
        date: '10 Jan 2024'
    },
    {
        orderID: '#FES-4212',
        status: {
            // successful: 'Successful',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        amount: '$2,500.00',
        rewards: '$23.42',
        date: '11 Jan 2024'
    },
    {
        orderID: '#VGS-4123',
        status: {
            // successful: 'Successful',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$3,890.00',
        rewards: '$11.00',
        date: '12 Jan 2024'
    },
    {
        orderID: '#ABC-1231',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$258.00',
        rewards: '$9.00',
        date: '13 Jan 2024'
    },
    {
        orderID: '#ARP-1217',
        status: {
            successful: 'Successful',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        amount: '$6855.00',
        rewards: '$12.00',
        date: '14 Jan 2024'
    }
];

export interface PeriodicElement {
    orderID: string;
    status: any;
    amount: string;
    rewards: string;
    date: string;
}