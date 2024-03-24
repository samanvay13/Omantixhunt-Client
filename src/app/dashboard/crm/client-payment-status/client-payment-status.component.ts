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
    ApexLegend,
    ApexGrid,
    ApexPlotOptions,
    ApexStroke,
    ApexFill,
    NgApexchartsModule,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    legend: ApexLegend;
    grid: ApexGrid;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    labels: any;
    tooltip: ApexTooltip;
    colors: any;
    stroke: ApexStroke;
    fill: ApexFill;
};

@Component({
    selector: 'app-client-payment-status',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './client-payment-status.component.html',
    styleUrl: './client-payment-status.component.scss'
})
export class ClientPaymentStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [35, 25, 15],
            chart: {
                height: 270,
                type: "polarArea"
            },
            stroke: {
                width: 0,
                colors: ["#ffffff"]
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 1,
                        strokeColor: '#e0e0e0',
                    },
                    spokes: {
                        strokeWidth: 1,
                        connectorColors: '#e0e0e0',
                    }
                }
            },
            colors: [
                "#0f79f3", "#00cae3", "#ffb264"
            ],
            fill: {
                opacity: 1
            },
            grid: {
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            legend: {
                offsetY: 0,
                floating: true,
                fontSize: "14px",
                position: "top",
                horizontalAlign: "left",
                labels: {
                    colors: "#919aa3",
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 0
                }
            },
            labels: [
                "Paid", "Pending", "Overdue"
            ],
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