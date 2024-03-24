import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexChart,
    NgApexchartsModule,
    ApexLegend,
    ApexDataLabels,
    ApexTooltip,
    ApexStroke
} from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: any;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    colors: string[];
    tooltip: ApexTooltip;
    legend: ApexLegend;
};

@Component({
    selector: 'app-most-leads',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './most-leads.component.html',
    styleUrl: './most-leads.component.scss'
})
export class MostLeadsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [55, 30, 10, 5],
            chart: {
                width: 331,
                type: "pie"
            },
            stroke: {
                width: 2,
                show: true
            },
            labels: [
                "Email", "Social", "Call", "Others"
            ],
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false,
                style: {
                    fontSize: '14px'
                },
                dropShadow: {
                    enabled: false
                }
            },
            colors: [
                "#00cae3", "#0e7aee", "#796df6", "#ffb264"
            ],
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        };
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