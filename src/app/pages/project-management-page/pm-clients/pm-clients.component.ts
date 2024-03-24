import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-pm-clients',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgFor],
    templateUrl: './pm-clients.component.html',
    styleUrl: './pm-clients.component.scss'
})
export class PmClientsComponent {

    clientCard = [
        {
            clientImg: `assets/images/clients/client1.png`,
            clientName: `InnovateTech Solutions`,
            clientEmail: `innovat@example.com`,
            contactPerson: `Wanda Rickard`,
            contactPhone: `+1 555-445-4455`,
            totalProjects: `5`
        },
        {
            clientImg: `assets/images/clients/client2.png`,
            clientName: `GlobalTec Enterprises`,
            clientEmail: `tec@example.com`,
            contactPerson: `Christopher Schnell`,
            contactPhone: `+1 555-666-7555`,
            totalProjects: `2`
        },
        {
            clientImg: `assets/images/clients/client3.png`,
            clientName: `Quatum Innovation`,
            clientEmail: `itum@example.com`,
            contactPerson: `Jacqueline Hansen`,
            contactPhone: `+1 555-222-3366`,
            totalProjects: `4`
        },
        {
            clientImg: `assets/images/clients/client4.png`,
            clientName: `Synerg Technologies`,
            clientEmail: `syner@example.com`,
            contactPerson: `Christopher Allen`,
            contactPhone: `+1 555-444-5555`,
            totalProjects: `6`
        },
        {
            clientImg: `assets/images/clients/client5.png`,
            clientName: `Apox Dynamics Inc.`,
            clientEmail: `apox@example.com`,
            contactPerson: `Phillip R. Baldwin`,
            contactPhone: `+1 555-999-5533`,
            totalProjects: `7`
        },
        {
            clientImg: `assets/images/clients/client6.png`,
            clientName: `Dynam Innovations`,
            clientEmail: `dynam@example.com`,
            contactPerson: `Sylvia Ward`,
            contactPhone: `+1 555-888-2255`,
            totalProjects: `2`
        },
        {
            clientImg: `assets/images/clients/client7.png`,
            clientName: `VitonTech Corp`,
            clientEmail: `viton@example.com`,
            contactPerson: `Scott Johnson`,
            contactPhone: `+1 555-233-9933`,
            totalProjects: `3`
        },
        {
            clientImg: `assets/images/clients/client8.png`,
            clientName: `TechMast Solutions`,
            clientEmail: `mast@example.com`,
            contactPerson: `Freddie Craddock`,
            contactPhone: `+1 555-446-7788`,
            totalProjects: `4`
        },
        {
            clientImg: `assets/images/clients/client9.png`,
            clientName: `Precion Innovations`,
            clientEmail: `precion@example.com`,
            contactPerson: `John Cardinal`,
            contactPhone: `+1 555-444-6678`,
            totalProjects: `5`
        },
        {
            clientImg: `assets/images/clients/client10.png`,
            clientName: `Nejus Dynamiz Group`,
            clientEmail: `nejux@example.com`,
            contactPerson: `Mark Richardson`,
            contactPhone: `+1 555-666-8855`,
            totalProjects: `9`
        },
        {
            clientImg: `assets/images/clients/client11.png`,
            clientName: `Somit Solutions`,
            clientEmail: `somit@example.com`,
            contactPerson: `Barbara Hutchinson`,
            contactPhone: `+1 555-999-8877`,
            totalProjects: `5`
        },
        {
            clientImg: `assets/images/clients/client12.png`,
            clientName: `Inictos Enterprises`,
            clientEmail: `inictos@example.com`,
            contactPerson: `Jennie Anderson`,
            contactPhone: `+1 555-111-4488`,
            totalProjects: `2`
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