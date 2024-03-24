import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-video-courses',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './video-courses.component.html',
    styleUrl: './video-courses.component.scss'
})
export class VideoCoursesComponent {}