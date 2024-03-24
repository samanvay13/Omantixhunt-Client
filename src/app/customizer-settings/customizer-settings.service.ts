import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomizerSettingsService {
    
    // Dark Mode
    private isDarkTheme: boolean;

    // Sidebar Dark Mode
    private isSidebarDarkTheme: boolean;

    // Right Sidebar
    private isRightSidebarTheme: boolean;

    // Hide Sidebar
    private isHideSidebarTheme: boolean;

    // Header Dark Mode
    private isHeaderDarkTheme: boolean;

    // Card Border
    private isCardBorderTheme: boolean;

    // Card Border Radius
    private isCardBorderRadiusTheme: boolean;

    // RTL Mode
    private isRTLEnabledTheme: boolean;

    constructor() {
        // Dark Mode
        this.isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme')!);

        // Sidebar Dark Mode
        this.isSidebarDarkTheme = JSON.parse(localStorage.getItem('isSidebarDarkTheme')!);

        // Right Sidebar
        this.isRightSidebarTheme = JSON.parse(localStorage.getItem('isRightSidebarTheme')!);

        // Hide Sidebar
        this.isHideSidebarTheme = JSON.parse(localStorage.getItem('isHideSidebarTheme')!);

        // Header Dark
        this.isHeaderDarkTheme = JSON.parse(localStorage.getItem('isHeaderDarkTheme')!);

        // Card Border
        this.isCardBorderTheme = JSON.parse(localStorage.getItem('isCardBorderTheme')!);

        // Card Border Radius
        this.isCardBorderRadiusTheme = JSON.parse(localStorage.getItem('isCardBorderRadiusTheme')!);

        // RTL Mode
        this.isRTLEnabledTheme = JSON.parse(localStorage.getItem('isRTLEnabledTheme')!);
    }

    // Dark Mode
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    }
    isDark() {
        return this.isDarkTheme;
    }

    // Sidebar Dark
    toggleSidebarTheme() {
        this.isSidebarDarkTheme = !this.isSidebarDarkTheme;
        localStorage.setItem('isSidebarDarkTheme', JSON.stringify(this.isSidebarDarkTheme));
    }
    isSidebarDark() {
        return this.isSidebarDarkTheme;
    }

    // Right Sidebar
    toggleRightSidebarTheme() {
        this.isRightSidebarTheme = !this.isRightSidebarTheme;
        localStorage.setItem('isRightSidebarTheme', JSON.stringify(this.isRightSidebarTheme));
    }
    isRightSidebar() {
        return this.isRightSidebarTheme;
    }

    // Hide Sidebar
    toggleHideSidebarTheme() {
        this.isHideSidebarTheme = !this.isHideSidebarTheme;
        localStorage.setItem('isHideSidebarTheme', JSON.stringify(this.isHideSidebarTheme));
    }
    isHideSidebar() {
        return this.isHideSidebarTheme;
    }

    // Header Dark Mode
    toggleHeaderTheme() {
        this.isHeaderDarkTheme = !this.isHeaderDarkTheme;
        localStorage.setItem('isHeaderDarkTheme', JSON.stringify(this.isHeaderDarkTheme));
    }
    isHeaderDark() {
        return this.isHeaderDarkTheme;
    }

    // Card Border
    toggleCardBorderTheme() {
        this.isCardBorderTheme = !this.isCardBorderTheme;
        localStorage.setItem('isCardBorderTheme', JSON.stringify(this.isCardBorderTheme));
    }
    isCardBorder() {
        return this.isCardBorderTheme;
    }

    // Card Border Radius
    toggleCardBorderRadiusTheme() {
        this.isCardBorderRadiusTheme = !this.isCardBorderRadiusTheme;
        localStorage.setItem('isCardBorderRadiusTheme', JSON.stringify(this.isCardBorderRadiusTheme));
    }
    isCardBorderRadius() {
        return this.isCardBorderRadiusTheme;
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.isRTLEnabledTheme = !this.isRTLEnabledTheme;
        localStorage.setItem('isRTLEnabledTheme', JSON.stringify(this.isRTLEnabledTheme));
    }
    isRTLEnabled() {
        return this.isRTLEnabledTheme;
    }

    // isToggled
    private isToggled = new BehaviorSubject<boolean>(false);
    get isToggled$() {
        return this.isToggled.asObservable();
    }
    toggle() {
        this.isToggled.next(!this.isToggled.value);
    }
    
}