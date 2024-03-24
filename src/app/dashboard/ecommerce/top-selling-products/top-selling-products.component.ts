import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-selling-products',
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
        number: '01.',
        product: {
            productName: 'Rule 1',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '02.',
        product: {
            productName: 'Rule 2',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '03.',
        product: {
            productName: 'Rule 3',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '04.',
        product: {
            productName: 'Rule 4',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '05.',
        product: {
            productName: 'Rule 5',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '06.',
        product: {
            productName: 'Rule 6',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '07.',
        product: {
            productName: 'Rule 7',
        },
        invoiceNumber: '',
        price: ''
    }
];

export interface PeriodicElement {
    number: string;
    product: any;
    invoiceNumber: string;
    price: string;
}