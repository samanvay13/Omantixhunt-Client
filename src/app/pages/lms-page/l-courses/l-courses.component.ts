import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { PaidCoursesComponent } from './paid-courses/paid-courses.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';
import { TopRatedCoursesComponent } from './top-rated-courses/top-rated-courses.component';
import { BestSellerCoursesComponent } from './best-seller-courses/best-seller-courses.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-l-courses',
    standalone: true,
    imports: [RouterLink, RouterOutlet, MatCardModule, MatMenuModule, MatButtonModule, MatTabsModule, AllCoursesComponent, PaidCoursesComponent, FreeCoursesComponent, TopRatedCoursesComponent, BestSellerCoursesComponent],
    templateUrl: './l-courses.component.html',
    styleUrl: './l-courses.component.scss'
})
export class LCoursesComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}