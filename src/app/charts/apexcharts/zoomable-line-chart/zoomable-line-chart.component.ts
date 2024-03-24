import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexXAxis,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

import { dataSeries } from "./data-series";

@Component({
    selector: 'app-zoomable-line-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './zoomable-line-chart.component.html',
    styleUrl: './zoomable-line-chart.component.scss'
})
export class ZoomableLineChartComponent {

    public series: ApexAxisChartSeries;
    public chart: ApexChart;
    public dataLabels: ApexDataLabels;
    public markers: ApexMarkers;
    public title: ApexTitleSubtitle;
    public fill: ApexFill;
    public yaxis: ApexYAxis;
    public grid: ApexGrid;
    public xaxis: ApexXAxis;
    public tooltip: ApexTooltip;

    constructor() {
        this.initChartData();
    }

    public initChartData(): void {
        let ts2 = 1484418600000;
        let dates = [];
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;
            dates.push([ts2, dataSeries[1][i].value]);
        }
        this.series = [
            {
                name: "XYZ MOTORS",
                data: dates
            }
        ];
        this.chart = {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                show: true,
                autoSelected: "zoom"
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.markers = {
            size: 0
        };
        this.grid = {
            show: true,
            strokeDashArray: 5,
            borderColor: "#e0e0e0"
        },
        this.title = {
            text: "Stock Price Movement",
            align: "left",
            offsetX: -9,
            style: {
                fontWeight: '500',
                fontSize: '15px',
                color: '#475569'
            }
        };
        this.fill = {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                // stops: [0, 90, 100]
            }
        };
        this.yaxis = {
            labels: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                },
                show: true,
                style: {
                    colors: "#919aa3",
                    fontSize: "14px"
                }
            },
            title: {
                text: "Price",
                style: {
                    color: "#475569",
                    fontSize: "14px",
                    fontWeight: 500
                }
            },
            axisBorder: {
                show: false
            }
        };
        this.xaxis = {
            type: "datetime",
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
        };
        this.tooltip = {
            shared: false,
            y: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                }
            }
        };
    }

}