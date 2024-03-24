import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexTitleSubtitle,
    ApexYAxis,
    ApexXAxis,
    ApexGrid,
    ApexDataLabels,
    ApexMarkers,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    markers: ApexMarkers;
    stroke: ApexStroke;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: any;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-stepline-line-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './stepline-line-chart.component.html',
    styleUrl: './stepline-line-chart.component.scss'
})
export class SteplineLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Stepline Series",
                    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
                }
            ],
            chart: {
                type: "line",
                height: 350
            },
            stroke: {
                curve: "stepline"
            },
            colors: [
                "#0f79f3"
            ],
            dataLabels: {
                enabled: false
            },
            title: {
                text: "Stepline Chart",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '15px',
                    color: '#475569'
                }
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
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
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            }
        };
    }

}