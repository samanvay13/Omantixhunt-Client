import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import {
    ApexAxisChartSeries,
    ChartComponent,
    ApexChart,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexLegend,
    ApexXAxis,
    ApexGrid,
    ApexYAxis,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis,
    yaxis: ApexYAxis,
    grid: ApexGrid,
    legend: ApexLegend,
    tooltip: ApexTooltip,
    plotOptions: ApexPlotOptions;
    colors: string[]
};

@Component({
    selector: 'app-basic-boxplot-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './basic-boxplot-chart.component.html',
    styleUrl: './basic-boxplot-chart.component.scss'
})
export class BasicBoxplotChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'Box',
                    type: 'boxPlot',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: [29, 31, 35, 39, 44]
                        }
                    ]
                },
                {
                    name: 'Outliers',
                    type: 'scatter',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: 32
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: 25
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: 64
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 27
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 78
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: 15
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "boxPlot",
                toolbar: {
                    show: true
                }
            },
            colors: [
                '#0f79f3', '#e74c3c'
            ],
            title: {
                text: 'BoxPlot - Scatter Chart',
                align: 'left',
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '15px',
                    color: '#475569'
                }
            },
            xaxis: {
                type: 'datetime',
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
            tooltip: {
                shared: false,
                intersect: true
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            legend: {
                offsetY: -5,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#919aa3'
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            }
        };
    }

}