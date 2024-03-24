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
    ApexStroke,
    NgApexchartsModule,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    colors: string[];
    grid: ApexGrid;
    tooltip: ApexTooltip;
    yaxis: ApexYAxis;
    fill: ApexFill;
    stroke: ApexStroke;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
};

@Component({
    selector: 'app-revenue',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss'
})
export class RevenueComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Income",
                    data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                    name: "Expenses",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }
            ],
            chart: {
                height: 205,
                type: "area",
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            colors: [
                "#796DF6", "#00CAE3"
            ],
            legend: {
                position: "top",
                fontSize: "14px",
                labels: {
                    colors: "#919aa3",
                },
                itemMargin: {
                    horizontal: 12,
                    vertical: 0
                }
            },
            xaxis: {
                categories: [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],
                axisBorder: {
                    show: false,
                    color: '#e0e0e0'
                },
                axisTicks: {
                    show: true,
                    color: '#e0e0e0'
                },
                labels: {
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: {
                tickAmount: 3,
                labels: {
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            fill: {
                gradient: {
                    opacityFrom: 0,
                    opacityTo: 0.4,
                }
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val;
                    }
                }
            }
        };
    }

}