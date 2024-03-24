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
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    tooltip: any; // ApexTooltip;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
};

@Component({
    selector: 'app-tasks-stats',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './tasks-stats.component.html',
    styleUrl: './tasks-stats.component.scss'
})
export class TasksStatsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tasks Created",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                {
                    name: "Tasks Solved",
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                }
            ],
            chart: {
                height: 225,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#00cae3", "#ffb264"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: "straight",
                dashArray: [0, 8, 5]
            },
            legend: {
                show: false,
                fontSize: '14px',
                labels: {
                    colors: "#ffffff"
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                axisBorder: {
                    show: true,
                    color: '#f1f1f1'
                },
                axisTicks: {
                    show: true,
                    color: '#f1f1f1'
                },
                labels: {
                    trim: false,
                    show: true,
                    style: {
                        colors: "#ffffff",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                labels: {
                    show: true,
                    style: {
                        colors: "#ffffff",
                        fontSize: "14px"
                    }
                }
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#7a70eb",
            }
        };
    }

}