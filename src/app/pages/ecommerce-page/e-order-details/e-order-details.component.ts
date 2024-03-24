import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-order-details',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule],
    templateUrl: './e-order-details.component.html',
    styleUrl: './e-order-details.component.scss'
})
export class EOrderDetailsComponent {

    displayedColumns: string[] = ['orderID', 'product', 'items', 'price', 'total'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
        orderID: ' #ARP-1217',
        product: {
            img: 'assets/images/products/product6.png',
            name: 'Hand Watch'
        },
        items: 1,
        price: '$80.00',
        total: '$80.00'
    },
    {
        orderID: ' #ARP-1423',
        product: {
            img: 'assets/images/products/product3.png',
            name: 'Gaming Laptop'
        },
        items: 3,
        price: '$150.00',
        total: '$450.00'
    },
    {
        orderID: ' #ARP-4312',
        product: {
            img: 'assets/images/products/product8.png',
            name: 'Sports Shoes'
        },
        items: 1,
        price: '$750.00',
        total: '$750.00'
    },
    {
        orderID: ' #ARP-3124',
        product: {
            img: 'assets/images/products/product9.png',
            name: 'Woman Handbag'
        },
        items: 5,
        price: '$15.00',
        total: '$75.00'
    },
    {
        orderID: ' #ARP-1234',
        product: {
            img: 'assets/images/products/product10.png',
            name: 'Luxury Rendering'
        },
        items: 2,
        price: '$25.00',
        total: '$50.00'
    }
];

export interface PeriodicElement {
    orderID: string;
    product: any;
    items: number;
    price: string;
    total: string;
}