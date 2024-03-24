import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexYAxis,
    ApexTooltip,
    ApexMarkers,
    ApexXAxis,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexLegend,
    ApexGrid
} from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    labels: string[];
    stroke: any; // ApexStroke;
    markers: ApexMarkers;
    plotOptions: ApexPlotOptions;
    grid: ApexGrid;
    fill: ApexFill;
    legend: ApexLegend;
    colors: string[];
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-active-students',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './active-students.component.html',
    styleUrl: './active-students.component.scss'
})
export class ActiveStudentsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Monthly",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                },
                {
                    name: "Weekly",
                    type: "area",
                    data: [44, 55, 41, 65, 22, 43, 21, 41, 56, 27, 43]
                },
                {
                    name: "Daily",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 65, 52, 59, 36, 39]
                }
            ],
            chart: {
                height: 460,
                type: "line",
                stacked: false,
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [0, 2, 5],
                curve: "smooth"
            },
            plotOptions: {
                bar: {
                    columnWidth: "45%"
                }
            },
            colors:[
                '#00cae3', '#d2d2e4', '#796df6'
            ],
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    // stops: [0, 100, 100, 100]
                }
            },
            legend: {
                show: true,
                offsetY: 6,
                fontSize: '14px',
                labels: {
                    colors: "#919aa3"
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            markers: {
                size: 0
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
                    "Oct",
                    "Nov"
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
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}