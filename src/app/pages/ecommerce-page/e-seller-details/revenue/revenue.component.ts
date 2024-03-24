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
    ApexGrid
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
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
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
                    name: "Orders",
                    data: [320, 332, 301, 334, 390, 300, 280]
                },
                {
                    name: "Earnings",
                    data: [220, 182, 191, 234, 290, 200, 180]
                },
                {
                    name: "Refunds",
                    data: [150, 232, 201, 154, 190, 140, 120]
                },
                {
                    name: "Conversion Rate",
                    data: [98, 77, 101, 99, 40, 88, 62]
                }
            ],
            chart: {
                type: "bar",
                height: 501,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%"
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#00cae3", "#0f79f3", "#ffb264", "#ee6666"
            ],
            stroke: {
                width: 5,
                show: true,
                colors: ["transparent"]
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
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: "#919aa3"
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            }
        };
    }

}