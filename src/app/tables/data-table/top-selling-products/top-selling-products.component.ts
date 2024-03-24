import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-selling-products:not(p)',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './top-selling-products.component.html',
    styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

    displayedColumns: string[] = ['number', 'product', 'invoiceNumber', 'price'];
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
        number: '01.',
        product: {
            productImage: 'assets/images/products/product1.png',
            productName: 'Smart Watch',
            productSold: '953 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-1217',
        price: '$90,954'
    },
    {
        number: '02.',
        product: {
            productImage: 'assets/images/products/product2.png',
            productName: 'Mobile Phone',
            productSold: '876 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-9513',
        price: '$85,648'
    },
    {
        number: '03.',
        product: {
            productImage: 'assets/images/products/product3.png',
            productName: 'Laptop Device',
            productSold: '823 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-7531',
        price: '$79,852'
    },
    {
        number: '04.',
        product: {
            productImage: 'assets/images/products/product4.png',
            productName: 'Black T-Shirt',
            productSold: '743 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-3579',
        price: '$73,624'
    },
    {
        number: '05.',
        product: {
            productImage: 'assets/images/products/product5.png',
            productName: 'Headphones',
            productSold: '693 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-4826',
        price: '$65,973'
    },
    {
        number: '06.',
        product: {
            productImage: 'assets/images/products/product6.png',
            productName: 'Hand Watch',
            productSold: '654 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-1265',
        price: '$42,455'
    },
    {
        number: '07.',
        product: {
            productImage: 'assets/images/products/product7.png',
            productName: 'Gaming Laptop',
            productSold: '214 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-7654',
        price: '$75,643'
    },
    {
        number: '08.',
        product: {
            productImage: 'assets/images/products/product8.png',
            productName: 'Sports Shoes',
            productSold: '342 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-5678',
        price: '$45,678'
    },
    {
        number: '09.',
        product: {
            productImage: 'assets/images/products/product9.png',
            productName: '437 Handbag',
            productSold: '953 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-5424',
        price: '$21,453'
    },
    {
        number: '10.',
        product: {
            productImage: 'assets/images/products/product10.png',
            productName: 'Luxury Rendering',
            productSold: '524 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-4312',
        price: '$43,242'
    },
    {
        number: '11.',
        product: {
            productImage: 'assets/images/products/product6.png',
            productName: 'Hand Watch',
            productSold: '654 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-1265',
        price: '$42,455'
    },
    {
        number: '12.',
        product: {
            productImage: 'assets/images/products/product7.png',
            productName: 'Gaming Laptop',
            productSold: '214 Items Sold'
        },
        invoiceNumber: 'Item: #ARP-7654',
        price: '$75,643'
    }
];
export interface PeriodicElement {
    number: string;
    product: any;
    invoiceNumber: string;
    price: string;
}