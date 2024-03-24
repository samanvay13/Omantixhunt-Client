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
    ApexGrid,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
    fill: ApexFill;
};

@Component({
    selector: 'app-stacked-area-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './stacked-area-chart.component.html',
    styleUrl: './stacked-area-chart.component.scss'
})
export class StackedAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "South",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                },
                {
                    name: "North",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 20
                        }
                    )
                },
                {
                    name: "Central",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 15
                        }
                    )
                }
            ],
            chart: {
                type: "area",
                height: 350,
                stacked: true,
                events: {
                    selection: function(chart, e) {
                        console.log(new Date(e.xaxis.min));
                    }
                },
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#796df6", "#0f79f3", "#00cae3"
            ],
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8
                }
            },
            legend: {
                show: true,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "left",
                labels: {
                    colors: "#919aa3"
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: false,
                    color: '#e0e0e0'
                },
                axisTicks: {
                    show: false,
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
            }
        };
    }

    public generateDayWiseTimeSeries = function(baseval:any, count:any, yrange:any) {
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
    };

}