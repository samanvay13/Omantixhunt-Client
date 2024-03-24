import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-star-rating',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './star-rating.component.html',
    styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

    @Input() rating: number;
    @Input() readonly: boolean = false;
    @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

    onClick(rating: number): void {
        if (!this.readonly) {
            this.rating = rating;
            this.ratingChange.emit(this.rating);
        }
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}