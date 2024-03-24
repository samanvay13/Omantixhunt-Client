import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActiveCoursesComponent } from './active-courses/active-courses.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { CompletionStatusComponent } from './completion-status/completion-status.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';
import { TopInstructorsComponent } from './top-instructors/top-instructors.component';
import { TotalCoursesSalesComponent } from './total-courses-sales/total-courses-sales.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { TotalInstructorsComponent } from './total-instructors/total-instructors.component';
import { StudentsProgressComponent } from './students-progress/students-progress.component';
import { CoursesComponent } from './courses/courses.component';
import { TimeSpendingsComponent } from './time-spendings/time-spendings.component';
import { AverageEnrollmentRateComponent } from './average-enrollment-rate/average-enrollment-rate.component';
import { TodaysCourseComponent } from './todays-course/todays-course.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lms',
    standalone: true,
    imports: [WelcomeComponent, ActiveCoursesComponent, EnrolledStudentsComponent, CompletionStatusComponent, ActiveStudentsComponent, CoursesCategoriesComponent, TopInstructorsComponent, TotalCoursesSalesComponent, VideoCoursesComponent, TotalInstructorsComponent, StudentsProgressComponent, CoursesComponent, TimeSpendingsComponent, AverageEnrollmentRateComponent, TodaysCourseComponent, RouterLink],
    templateUrl: './lms.component.html',
    styleUrl: './lms.component.scss'
})
export class LmsComponent {}