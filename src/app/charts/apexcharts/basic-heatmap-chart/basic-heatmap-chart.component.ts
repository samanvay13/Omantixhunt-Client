import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    colors: any;
};

@Component({
    selector: 'app-basic-heatmap-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './basic-heatmap-chart.component.html',
    styleUrl: './basic-heatmap-chart.component.scss'
})
export class BasicHeatmapChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Metric 1",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 2",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 3",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 4",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 5",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 6",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 7",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 8",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 9",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                }
            ],
            chart: {
                height: 350,
                type: "heatmap",
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#0f79f3"
            ],
            title: {
                text: "HeatMap Chart (Single color)",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '15px',
                    color: '#475569'
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            xaxis: {
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
                },
                axisBorder: {
                    show: false
                }
            }
        };
    }

    public generateData(count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

}