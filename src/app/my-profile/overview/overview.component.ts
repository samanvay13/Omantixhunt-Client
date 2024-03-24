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
    selector: 'app-overview',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Total Projects",
                    data: [320, 332, 301, 334, 390, 300, 280]
                },
                {
                    name: "Total Orders",
                    data: [220, 182, 191, 234, 290, 200, 180]
                },
                {
                    name: "Total Revenue",
                    data: [150, 232, 201, 154, 190, 140, 120]
                }
            ],
            chart: {
                type: "bar",
                height: 396,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "40%"
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#0f79f3", "#ffb264", "#e74c3c"
            ],
            stroke: {
                width: 7,
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