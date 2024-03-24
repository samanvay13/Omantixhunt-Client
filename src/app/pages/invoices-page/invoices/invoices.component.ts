import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-invoices',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatTooltipModule],
    templateUrl: './invoices.component.html',
    styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {

    displayedColumns: string[] = ['invoiceID', 'customer', 'email', 'issuedDate', 'total', 'quantity', 'walletBalance', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

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
        invoiceID: '#158',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        total: '$5,000',
        issuedDate: 'Nov 10, 2023',
        quantity: 6,
        walletBalance: '$2,000',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#325',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        total: '$8,750',
        issuedDate: 'Nov 11, 2023',
        quantity: 10,
        walletBalance: '$4,500',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#286',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        total: '$3,200',
        issuedDate: 'Nov 12, 2023',
        quantity: 6,
        walletBalance: '$1,550',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#463',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        total: '$3,750',
        issuedDate: 'Nov 13, 2023',
        quantity: 4,
        walletBalance: '$2,490',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#998',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        total: '$6,000',
        issuedDate: 'Nov 14, 2023',
        quantity: 2,
        walletBalance: '$3,599',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#436',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        total: '$9,200',
        issuedDate: 'Nov 13, 2023',
        quantity: 8,
        walletBalance: '$5,800',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#860',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        total: '$2,500',
        issuedDate: 'Nov 12, 2023',
        quantity: 6,
        walletBalance: '$1,200',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#491',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        total: '$7,300',
        issuedDate: 'Nov 17, 2023',
        quantity: 9,
        walletBalance: '$4,850',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#125',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        total: '$4,800',
        issuedDate: 'Nov 18, 2023',
        quantity: 5,
        walletBalance: '$2,300',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#579',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        total: '$6,500',
        issuedDate: 'Nov 19, 2023',
        quantity: 6,
        walletBalance: '$4,560',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#579',
        customer: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        total: '$6,500',
        issuedDate: 'Nov 19, 2023',
        quantity: 6,
        walletBalance: '$4,560',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#125',
        customer: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        total: '$4,800',
        issuedDate: 'Nov 18, 2023',
        quantity: 5,
        walletBalance: '$2,300',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#491',
        customer: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        total: '$7,300',
        issuedDate: 'Nov 17, 2023',
        quantity: 9,
        walletBalance: '$4,850',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#860',
        customer: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        total: '$2,500',
        issuedDate: 'Nov 16, 2023',
        quantity: 6,
        walletBalance: '$1,200',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#436',
        customer: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        total: '$9,200',
        issuedDate: 'Nov 15, 2023',
        quantity: 8,
        walletBalance: '$5,800',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#998',
        customer: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        total: '$6,000',
        issuedDate: 'Nov 14, 2023',
        quantity: 2,
        walletBalance: '$3,599',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#463',
        customer: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        total: '$3,750',
        issuedDate: 'Nov 13, 2023',
        quantity: 4,
        walletBalance: '$2,490',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#286',
        customer: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        total: '$3,200',
        issuedDate: 'Nov 12, 2023',
        quantity: 6,
        walletBalance: '$1,550',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#325',
        customer: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        total: '$8,750',
        issuedDate: 'Nov 11, 2023',
        quantity: 10,
        walletBalance: '$4,500',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    },
    {
        invoiceID: '#158',
        customer: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        total: '$5,000',
        issuedDate: 'Nov 10, 2023',
        quantity: 6,
        walletBalance: '$2,000',
        action: {
            view: 'visibility',
            print: 'print',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    invoiceID: string;
    customer: any;
    email: string;
    total: string;
    issuedDate: string;
    quantity: number;
    walletBalance: string;
    action: any;
}