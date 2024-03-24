import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ToggleService } from './toggle.service';
import { NgClass } from '@angular/common';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [NgScrollbarModule, MatExpansionModule, RouterLinkActive, RouterModule, RouterLink, NgClass],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService
    ) {
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Burger Menu Toggle
    toggle() {
        this.toggleService.toggle();
    }

    // Mat Expansion
    panelOpenState = false;

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Sidebar Dark
    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    // Right Sidebar
    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    // Hide Sidebar
    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    // Header Dark Mode
    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    // Card Border
    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}