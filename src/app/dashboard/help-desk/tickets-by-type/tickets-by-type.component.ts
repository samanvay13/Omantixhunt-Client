import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexLegend,
    NgApexchartsModule,
    ApexDataLabels,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    responsive: ApexResponsive[];
    labels: any;
    tooltip: ApexTooltip;
    colors: string[];
};

@Component({
    selector: 'app-tickets-by-type',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './tickets-by-type.component.html',
    styleUrl: './tickets-by-type.component.scss'
})
export class TicketsByTypeComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [40, 30, 20, 10],
            chart: {
                height: 400,
                type: "donut"
            },
            labels: [
                "Technical Issue", "Product Support", "General Inquiry", "Billing Inquiry"
            ],
            legend: {
                offsetY: 11,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: "#919aa3",
                },
                itemMargin: {
                    horizontal: 12,
                    vertical: 7
                }
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
                "#00cae3", "#0e7aee", "#796df6", "#ee6666"
            ],
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        };
    }

}