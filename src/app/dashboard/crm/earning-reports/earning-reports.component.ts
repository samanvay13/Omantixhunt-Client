import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexYAxis,
    ApexTooltip,
    ApexTitleSubtitle,
    ApexXAxis,
    NgApexchartsModule,
    ApexLegend,
    ApexGrid,
    ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    title: ApexTitleSubtitle;
    labels: string[];
    stroke: any; // ApexStroke;
    fill: ApexFill;
    plotOptions: ApexPlotOptions;
    grid: ApexGrid;
    tooltip: ApexTooltip;
    colors: string[];
    legend: ApexLegend;
};

@Component({
    selector: 'app-earning-reports',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './earning-reports.component.html',
    styleUrl: './earning-reports.component.scss'
})
export class EarningReportsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Orders",
                    type: "column",
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320]
                },
                {
                    name: "Sales",
                    type: "line",
                    data: [423, 542, 435, 627, 243, 422, 217, 331, 722, 322]
                }
            ],
            chart: {
                height: 224,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#5271f2", "#00cae3"
            ],
            stroke: {
                width: [0, 3],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: "45%"
                }
            },
            legend: {
                show: false,
                fontSize: '14px',
                labels: {
                    colors: "#919aa3"
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                categories: [
                    "Jan",
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
                }
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            }
        };
    }

}