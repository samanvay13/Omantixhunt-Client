import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexFill,
    ApexMarkers,
    ApexStroke,
    NgApexchartsModule,
    ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    fill: ApexFill;
    grid: ApexGrid;
    stroke: ApexStroke;
    markers: ApexMarkers;
    colors: string[];
};

@Component({
    selector: 'app-brush-line-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './brush-line-chart.component.html',
    styleUrl: './brush-line-chart.component.scss'
})
export class BrushLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions1: Partial<ChartOptions>;
    public chartOptions2: Partial<ChartOptions>;

    constructor() {
        this.chartOptions1 = {
            series: [
                {
                    name: "series1",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        185,
                        {
                            min: 0,
                            max: 20
                        }
                    )
                }
            ],
            chart: {
                id: "chart2",
                type: "line",
                height: 210,
                toolbar: {
                    autoSelected: "pan",
                    show: false
                }
            },
            colors: [
                "#0f79f3"
            ],
            stroke: {
                width: 3
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1
            },
            markers: {
                size: 0
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
                tickAmount: 2,
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

        this.chartOptions2 = {
            series: [
                {
                    name: "series1",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        185,
                        {
                            min: 0,
                            max: 20
                        }
                    )
                }
            ],
            chart: {
                id: "chart1",
                height: 120,
                type: "area",
                brush: {
                    target: "chart2",
                    enabled: true
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date("19 Jun 2017").getTime(),
                        max: new Date("14 Aug 2017").getTime()
                    }
                }
            },
            colors: [
                "#0f79f3"
            ],
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.91,
                    opacityTo: 0.1
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
                tickAmount: 2,
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

    public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

}