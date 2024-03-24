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
    selector: 'app-tickets-by-channel',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './tickets-by-channel.component.html',
    styleUrl: './tickets-by-channel.component.scss'
})
export class TicketsByChannelComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
        series: [50, 35, 25, 15],
            chart: {
                height: 399,
                type: 'polarArea'
            },
            labels: [
                'Email', 'App', 'Web', 'Chat'
            ],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            colors: [
                "#00cae3", "#796df6", "#0f79f3", "#ffb264"
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