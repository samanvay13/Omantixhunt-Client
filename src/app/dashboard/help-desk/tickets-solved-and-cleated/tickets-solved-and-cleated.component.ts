import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    NgApexchartsModule,
    ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    colors: string[];
    stroke: any; // ApexStroke;
    grid: ApexGrid;
    legend: ApexLegend;
    fill: ApexFill;
};

@Component({
    selector: 'app-tickets-solved-and-cleated',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './tickets-solved-and-cleated.component.html',
    styleUrl: './tickets-solved-and-cleated.component.scss'
})
export class TicketsSolvedAndCleatedComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tickets Created",
                    data: [250, 710, 450, 780, 390, 600, 350]
                },
                {
                    name: "Ticket Solved",
                    data: [200, 500, 300, 640, 250, 450, 150]
                }
            ],
            chart: {
                type: "area",
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#796df6", "#00cae3"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [4, 4]
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.1,
                    opacityTo: 0.6
                }
            },
            legend: {
                offsetY: 0,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: "#919aa3",
                },
                itemMargin: {
                    horizontal: 12,
                    vertical: 12
                }
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            xaxis: {
                categories: [
                    "January 7",
                    "January 8",
                    "January 9",
                    "January 10",
                    "January 11",
                    "January 12",
                    "January 13"
                ],
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
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    show: true,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            }
        };
    }

}