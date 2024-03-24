import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    title: ApexTitleSubtitle;
    fill: ApexFill,
    tooltip: ApexTooltip;
    yaxis: ApexYAxis,
    stroke: ApexStroke,
    legend: ApexLegend,
    colors: string[];
    plotOptions: ApexPlotOptions
};

@Component({
    selector: 'app-customer-satisfaction',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './customer-satisfaction.component.html',
    styleUrl: './customer-satisfaction.component.scss'
})
export class CustomerSatisfactionComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
        series: [55, 45, 35],
            chart: {
                height: 430,
                type: 'polarArea'
            },
            labels: [
                'Highly Satisfied', 'Satisfied', 'Unsatisfied'
            ],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            colors: [
                "#00cae3", "#0f79f3", "#796df6"
            ],
            yaxis: {
                show: false
            },
            legend: {
                offsetY: -10,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: "#919aa3",
                },
                itemMargin: {
                    horizontal: 12,
                    vertical: 7
                }
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        };
    }

}