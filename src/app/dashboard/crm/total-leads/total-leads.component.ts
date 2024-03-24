import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexLegend,
    NgApexchartsModule,
    ApexGrid
} from "ng-apexcharts";

import { series } from "./data";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    colors: string[];
    subtitle: ApexTitleSubtitle;
};

@Component({
    selector: 'app-total-leads',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './total-leads.component.html',
    styleUrl: './total-leads.component.scss'
})
export class TotalLeadsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Lead",
                    data: series.leads
                }
            ],
            chart: {
                type: "area",
                height: 255,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 2
            },
            colors: [
                "#00cae3"
            ],
            labels: series.dates,
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
                    show: false,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: "#919aa3",
                        fontSize: "14px"
                    }
                }
            },
            grid: {
                show: false,
                strokeDashArray: 5,
                borderColor: "#e0e0e0",
                row: {
                    colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0
                }
            }
        };
    }

}