import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    colors: string[];
    fill: ApexFill;
};

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, NgApexchartsModule],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
    providers: [DatePipe]
})
export class WelcomeComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    currentDate: any;

    constructor(
        private datePipe: DatePipe,
        public themeService: CustomizerSettingsService
    ) {
        this.currentDate = this.datePipe.transform(new Date(), 'MMMM d, yyyy');
        this.chartOptions = {
            series: [75],
            chart: {
                type: "radialBar",
                height: 240
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#958df4",
                        strokeWidth: "100%",
                        margin: 3, // margin is in pixels
                        dropShadow: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "25px",
                            fontWeight: 500,
                            color: "#ffffff"
                        }
                    }
                }
            },
            colors: [
                "#00cae3"
            ]
        };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // isToggled
    isToggled = false;

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}