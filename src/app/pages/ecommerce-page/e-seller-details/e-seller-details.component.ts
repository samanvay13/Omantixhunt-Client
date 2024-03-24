import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalEarningsComponent } from './total-earnings/total-earnings.component';
import { TotalRefundsComponent } from './total-refunds/total-refunds.component';
import { ConversionRateComponent } from './conversion-rate/conversion-rate.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RevenueComponent } from './revenue/revenue.component';
import { ProductsComponent } from './products/products.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-seller-details',
    standalone: true,
    imports: [MatCardModule, TotalOrdersComponent, TotalEarningsComponent, TotalRefundsComponent, ConversionRateComponent, MatMenuModule, MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule, FormsModule, RevenueComponent, ProductsComponent],
    templateUrl: './e-seller-details.component.html',
    styleUrl: './e-seller-details.component.scss'
})
export class ESellerDetailsComponent {

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