import { Component } from '@angular/core';
import { ProjectsProgressComponent } from './projects-progress/projects-progress.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RouterLink } from '@angular/router';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { ProjectDiscussionComponent } from './project-discussion/project-discussion.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ProjectsRoadmapComponent } from './projects-roadmap/projects-roadmap.component';
import { RunningProjectsComponent } from './running-projects/running-projects.component';

@Component({
    selector: 'app-pm-project-overview',
    standalone: true,
    imports: [ProjectsProgressComponent, ToDoListComponent, ProductDevelopmentComponent, ProjectDiscussionComponent, TeamMembersComponent, ProjectsRoadmapComponent, RunningProjectsComponent, RouterLink],
    templateUrl: './pm-project-overview.component.html',
    styleUrl: './pm-project-overview.component.scss'
})
export class PmProjectOverviewComponent {}