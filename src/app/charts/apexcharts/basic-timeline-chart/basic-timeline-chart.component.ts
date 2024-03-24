import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexPlotOptions,
    ApexYAxis,
    ApexGrid,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-basic-timeline-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './basic-timeline-chart.component.html',
    styleUrl: './basic-timeline-chart.component.scss'
})
export class BasicTimelineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: "Code",
                            y: [
                                new Date("2019-03-02").getTime(),
                                new Date("2019-03-04").getTime()
                            ]
                        },
                        {
                            x: "Test",
                            y: [
                                new Date("2019-03-04").getTime(),
                                new Date("2019-03-08").getTime()
                            ]
                        },
                        {
                            x: "Validation",
                            y: [
                                new Date("2019-03-08").getTime(),
                                new Date("2019-03-12").getTime()
                            ]
                        },
                        {
                            x: "Deployment",
                            y: [
                                new Date("2019-03-12").getTime(),
                                new Date("2019-03-18").getTime()
                            ]
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "rangeBar"
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis: {
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
            colors: [
                "#0f79f3"
            ],
        };
    }

}