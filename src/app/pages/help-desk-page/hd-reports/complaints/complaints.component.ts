import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexXAxis,
    ApexFill,
    ApexTooltip,
    NgApexchartsModule,
    ApexGrid,
    ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    colors: string[];
    grid: ApexGrid;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
};

@Component({
    selector: 'app-complaints',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './complaints.component.html',
    styleUrl: './complaints.component.scss'
})
export class ComplaintsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Complain",
                    data: [10, 41, 35, 60, 35, 55, 10]
                }
            ],
            chart: {
                height: 179,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: true
            },
            colors: [
                "#796dF6"
            ],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            title: {
                text: "Most complaints were received on Sunday.",
                align: "center",
                style: {
                    fontSize: '14px',
                    color: '#919aa3',
                    fontWeight: 'normal'
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#e0e0e0",
                row: {
                    colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            yaxis: {
                tickAmount: 2,
                labels: {
                    show: true,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            xaxis: {
                categories: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
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