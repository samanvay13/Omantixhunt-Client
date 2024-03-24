import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
    ApexChart,
    ApexAxisChartSeries,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexTooltip,
    ApexLegend,
    ApexGrid,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    colors: string[];
    tooltip: ApexTooltip;
    legend: ApexLegend;
};

@Component({
    selector: 'app-revenue-growth',
    standalone: true,
    imports: [NgApexchartsModule, RouterLink],
    templateUrl: './revenue-growth.component.html',
    styleUrl: './revenue-growth.component.scss'
})
export class RevenueGrowthComponent {

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
                    name: "Revenue Growth",
                    data: [211, 222, 100, 288, 166, 211, 300]
                }
            ],
            chart: {
                height: 120,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#00cae3"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
                strokeDashArray: 5,
                borderColor: "#e0e0e0"
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],
                axisBorder: {
                    show: true,
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
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val;
                    }
                }
            }
        };
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}