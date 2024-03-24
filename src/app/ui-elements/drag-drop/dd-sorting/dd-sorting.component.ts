import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-dd-sorting',
    standalone: true,
    imports: [CdkDropList, CdkDrag],
    templateUrl: './dd-sorting.component.html',
    styleUrl: './dd-sorting.component.scss'
})
export class DdSortingComponent {

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi',
        'Episode IX – The Rise of Skywalker',
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
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

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

}