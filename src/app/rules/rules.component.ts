import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-rules',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.scss'
})
export class RulesComponent {

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
            productName: 'Participants must adhere to the provided clues and instructions without deviation',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '02.',
        product: {
            productName: 'Collaboration among participants is encouraged, but each individual must submit their own answers or solutions',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '03.',
        product: {
            productName: 'All submissions must be made within the specified time frame to be considered valid',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '04.',
        product: {
            productName: 'In case of any disputes or uncertainties, the decision of the organizers is final',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '05.',
        product: {
            productName: 'Participants must refrain from using any external resources or assistance not explicitly permitted in the rules',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '06.',
        product: {
            productName: 'Any form of cheating, including sharing answers or attempting to manipulate the system, will result in immediate disqualification',
        },
        invoiceNumber: '',
        price: ''
    },
    {
        number: '07.',
        product: {
            productName: 'Have fun and enjoy the challenge!',
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