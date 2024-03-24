import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopSellingProductsComponent } from './top-selling-products/top-selling-products.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { RecentLeadsComponent } from './recent-leads/recent-leads.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';
import { TopInstructorsComponent } from './top-instructors/top-instructors.component';
import { StudentsProgressComponent } from './students-progress/students-progress.component';
import { CoursesComponent } from './courses/courses.component';
import { SlaMonitoringComponent } from './sla-monitoring/sla-monitoring.component';
import { PerformanceOfAgentsComponent } from './performance-of-agents/performance-of-agents.component';
import { RecentCustomerRatingComponent } from './recent-customer-rating/recent-customer-rating.component';

@Component({
    selector: 'app-data-table',
    standalone: true,
    imports: [RouterLink, TopSellingProductsComponent, RecentOrdersComponent, TransactionsHistoryComponent, TopCustomersComponent, RecentLeadsComponent, ToDoListComponent, AllProjectsComponent, CoursesCategoriesComponent, TopInstructorsComponent, StudentsProgressComponent, CoursesComponent, SlaMonitoringComponent, PerformanceOfAgentsComponent, RecentCustomerRatingComponent],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.scss'
})
export class DataTableComponent {}