import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-advance-accordion',
    standalone: true,
    imports: [RouterLink, MatCardModule, CdkAccordionModule, NgFor],
    templateUrl: './advance-accordion.component.html',
    styleUrl: './advance-accordion.component.scss'
})
export class AdvanceAccordionComponent {

    items = [
        {
            title: `How to integrate Angular with your website?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        },
        {
            title: `How do Angular site maintenance?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        },
        {
            title: `How to use Meta Tags in Angular?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        },
        {
            title: `How to change Language in Angular?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        },
        {
            title: `How to submit Angular?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        },
        {
            title: `How to install blogging Angular site?`,
            desc: `We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`
        }
    ];
    
    expandedIndex = 0;
    panelOpenState = false;

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