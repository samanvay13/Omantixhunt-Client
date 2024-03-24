import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    NgApexchartsModule,
    ApexGrid,
    ApexFill
} from "ng-apexcharts";

import { series } from "./data";
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    labels: string[];
    colors: string[];
    legend: ApexLegend;
};

@Component({
    selector: 'app-tickets-resolved',
    standalone: true,
    imports: [MatCardModule, NgApexchartsModule, RouterLink],
    templateUrl: './tickets-resolved.component.html',
    styleUrl: './tickets-resolved.component.scss'
})
export class TicketsResolvedComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Tickets Open",
                    data: series.tickets
                }
            ],
            chart: {
                type: "area",
                height: 115,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#0f79f3"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight",
                width: 3
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0,
                    opacityTo: 0.5
                }
            },
            labels: series.dates,
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: false,
                    color: '#e0e0e0'
                },
                axisTicks: {
                    show: false,
                    color: '#e0e0e0'
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            }
        };
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}