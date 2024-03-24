import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
    ApexGrid,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    colors: any;
    legend: ApexLegend;
};

@Component({
    selector: 'app-basic-column-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './basic-column-chart.component.html',
    styleUrl: './basic-column-chart.component.scss'
})
export class BasicColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                },
                {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                },
                {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#00cae3", "#0f79f3", "#ffb264"
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 3,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct"
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
                title: {
                    text: "$ (thousands)",
                    style: {
                        color: "#475569",
                        fontSize: "14px",
                        fontWeight: 500
                    }
                },
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
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val;
                    }
                }
            },
            legend: {
                show: true,
                offsetY: 5,
                fontSize: '14px',
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: "#919aa3"
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            }
        };
    }

}