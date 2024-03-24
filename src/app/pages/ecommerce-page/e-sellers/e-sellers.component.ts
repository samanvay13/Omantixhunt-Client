import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-sellers',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgFor],
    templateUrl: './e-sellers.component.html',
    styleUrl: './e-sellers.component.scss'
})
export class ESellersComponent {

    sellerCard = [
        {
            sellerImg: `assets/images/sellers/seller1.png`,
            sellerName: `Milton Jones`,
            lastSaleDate: `Nov 25, 2023`,
            itemStock: `50`,
            walletBalance: `$9,999.50`,
            revenue: `$5,999.50`,
            store: `TechMaster Store`
        },
        {
            sellerImg: `assets/images/sellers/seller2.png`,
            sellerName: `Victoria Hopkins`,
            lastSaleDate: `Nov 01, 2023`,
            itemStock: `39`,
            walletBalance: `$6,756.50`,
            revenue: `$4,645.50`,
            store: `RisionTech Outlet`
        },
        {
            sellerImg: `assets/images/sellers/seller3.png`,
            sellerName: `Venessa Jones`,
            lastSaleDate: `Sep 30, 2023`,
            itemStock: `75`,
            walletBalance: `$5,550.00`,
            revenue: `$4,350.50`,
            store: `ComfotLiving`
        },
        {
            sellerImg: `assets/images/sellers/seller4.png`,
            sellerName: `Roosevelt Hall`,
            lastSaleDate: `Aug 01, 2023`,
            itemStock: `99`,
            walletBalance: `$2,100.50`,
            revenue: `$1,500.50`,
            store: `SportFit Store`
        },
        {
            sellerImg: `assets/images/sellers/seller5.png`,
            sellerName: `Ralph Velasquez`,
            lastSaleDate: `Jul 25, 2023`,
            itemStock: `350`,
            walletBalance: `$15,250.50`,
            revenue: `$10,200.50`,
            store: `Velas Store`
        },
        {
            sellerImg: `assets/images/sellers/seller6.png`,
            sellerName: `Ellen Hernandez`,
            lastSaleDate: `Jul 10, 2023`,
            itemStock: `200`,
            walletBalance: `$10,500.50`,
            revenue: `$5,458.50`,
            store: `Herna Store`
        },
        {
            sellerImg: `assets/images/sellers/seller7.png`,
            sellerName: `Donald Qualls`,
            lastSaleDate: `Jun 25, 2023`,
            itemStock: `80`,
            walletBalance: `$2,580.00`,
            revenue: `$1,500.00`,
            store: `Dona Store`
        },
        {
            sellerImg: `assets/images/sellers/seller8.png`,
            sellerName: `David Williamson`,
            lastSaleDate: `May 20, 2023`,
            itemStock: `150`,
            walletBalance: `$9,000.00`,
            revenue: `$6,000.00`,
            store: `Willi Dav Store`
        },
        {
            sellerImg: `assets/images/sellers/seller9.png`,
            sellerName: `Rocky O'Donnell`,
            lastSaleDate: `Apr 30, 2023`,
            itemStock: `75`,
            walletBalance: `$7,500.50`,
            revenue: `$4,500.50`,
            store: `Donne Store`
        },
        {
            sellerImg: `assets/images/sellers/seller10.png`,
            sellerName: `Richard Brumfield`,
            lastSaleDate: `Apr 01, 2023`,
            itemStock: `500`,
            walletBalance: `$18,500.00`,
            revenue: `$13,200.00`,
            store: `RichMaster Store`
        },
        {
            sellerImg: `assets/images/sellers/seller11.png`,
            sellerName: `Dallas Jones`,
            lastSaleDate: `Mar 25, 2023`,
            itemStock: `50`,
            walletBalance: `$6,300.50`,
            revenue: `$4,000.50`,
            store: `Dajon Store`
        },
        {
            sellerImg: `assets/images/sellers/seller12.png`,
            sellerName: `Barbara Marshall`,
            lastSaleDate: `Mar 05, 202`,
            itemStock: `99`,
            walletBalance: `$3,699.50`,
            revenue: `$2,599.50`,
            store: `Barbahall Store`
        }
    ]

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