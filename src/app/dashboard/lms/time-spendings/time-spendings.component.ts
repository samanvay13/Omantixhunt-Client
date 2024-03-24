import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexChart,
    NgApexchartsModule,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    legend: ApexLegend;
    labels: any;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    colors: string[];
    dataLabels: ApexDataLabels;
};

@Component({
    selector: 'app-time-spendings',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './time-spendings.component.html',
    styleUrl: './time-spendings.component.scss'
})
export class TimeSpendingsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [65, 55, 45, 35, 25, 15, 5],
            chart: {
                type: "donut",
                height: 269
            },
            labels: [
                "Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"
            ],
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
                "#796df6", "#8d83f7", "#a199f9", "#b5affa", "#c9c5fb", "#dddbfd", "#f2f0fe"
            ],
            stroke: {
                width: 1
            },
            legend: {
                offsetY: 0,
                show: false,
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
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " hrs";
                    }
                }
            }
        };
    }

}