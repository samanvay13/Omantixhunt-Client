import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-course-videos',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './course-videos.component.html',
    styleUrl: './course-videos.component.scss'
})
export class CourseVideosComponent {}