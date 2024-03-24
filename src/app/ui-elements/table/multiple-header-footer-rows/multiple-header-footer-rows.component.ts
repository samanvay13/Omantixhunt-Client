import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

interface Transaction {
    item: string;
    cost: number;
}

@Component({
    selector: 'app-multiple-header-footer-rows',
    standalone: true,
    imports: [MatTableModule, CurrencyPipe],
    templateUrl: './multiple-header-footer-rows.component.html',
    styleUrl: './multiple-header-footer-rows.component.scss'
})
export class MultipleHeaderFooterRowsComponent {

    displayedColumns: string[] = ['item', 'cost'];
    transactions: Transaction[] = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
    ];

    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
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

}