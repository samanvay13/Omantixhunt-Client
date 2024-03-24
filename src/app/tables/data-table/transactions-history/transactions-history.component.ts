import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-transactions-history:not(p)',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './transactions-history.component.html',
    styleUrl: './transactions-history.component.scss'
})
export class TransactionsHistoryComponent {

    displayedColumns: string[] = ['transaction', 'price'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    plurPrice = true;
    minusPrice = true;

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
        transaction: {
            icon: 'settings_backup_restore',
            title: 'Refund Bill payment',
            subTitle: '15 Nov 2023 - 11:40am'
        },
        price: {
            plusPrice: '+$995'
        }
    },
    {
        transaction: {
            icon: 'account_balance',
            title: 'Bank Transfer',
            subTitle: '15 Nov 2023 - 8:20am'
        },
        price: {
            minusPrice: '-$1,550'
        }
    },
    {
        transaction: {
            icon: 'credit_card',
            title: 'Master Card',
            subTitle: '14 Nov 2023 - 11:40am'
        },
        price: {
            plusPrice: '+$862'
        }
    },
    {
        transaction: {
            icon: 'account_balance_wallet',
            title: 'Wallet',
            subTitle: '10 Nov 2023 - 10:10am '
        },
        price: {
            plusPrice: '+$974'
        }
    },
    {
        transaction: {
            icon: 'attach_money',
            title: 'Cash Withdrawal',
            subTitle: '09 Nov 2023 - 1:30pm '
        },
        price: {
            minusPrice: '-$250'
        }
    },
    {
        transaction: {
            icon: 'payments',
            title: 'Payment',
            subTitle: '8 Nov 2023 - 12:34pm'
        },
        price: {
            minusPrice: '-$657'
        }
    },
    {
        transaction: {
            icon: 'credit_card',
            title: 'Master Card',
            subTitle: '14 Nov 2023 - 11:40am'
        },
        price: {
            plusPrice: '+$862'
        }
    },
    {
        transaction: {
            icon: 'account_balance_wallet',
            title: 'Wallet',
            subTitle: '10 Nov 2023 - 10:10am '
        },
        price: {
            plusPrice: '+$974'
        }
    },
    {
        transaction: {
            icon: 'settings_backup_restore',
            title: 'Refund Bill payment',
            subTitle: '15 Nov 2023 - 11:40am'
        },
        price: {
            plusPrice: '+$995'
        }
    },
    {
        transaction: {
            icon: 'attach_money',
            title: 'Cash Withdrawal',
            subTitle: '09 Nov 2023 - 1:30pm '
        },
        price: {
            minusPrice: '-$250'
        }
    },
    {
        transaction: {
            icon: 'payments',
            title: 'Payment',
            subTitle: '8 Nov 2023 - 12:34pm'
        },
        price: {
            minusPrice: '-$657'
        }
    },
    {
        transaction: {
            icon: 'settings_backup_restore',
            title: 'Refund Bill payment',
            subTitle: '15 Nov 2023 - 11:40am'
        },
        price: {
            plusPrice: '+$995'
        }
    }
];

export interface PeriodicElement {
    transaction: any;
    price: any;
}