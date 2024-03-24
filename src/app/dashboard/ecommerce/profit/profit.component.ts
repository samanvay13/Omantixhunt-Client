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
    ApexTooltip,
    ApexYAxis,
    ApexStroke,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    colors: string[];
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
};

@Component({
    selector: 'app-profit',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './profit.component.html',
    styleUrl: './profit.component.scss'
})
export class ProfitComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Profit",
                    data: [0, 41, 35, 51, 49, 62, 69, 91, 160]
                }
            ],
            chart: {
                height: 224,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            colors: [
                "#796df6"
            ],
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0",
                row: {
                    colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September"
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
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val + "k";
                    }
                }
            }
        };
    }

}