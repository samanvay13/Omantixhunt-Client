import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketsOpenComponent } from '../dashboard/help-desk/tickets-open/tickets-open.component';
import { TicketsInProgressComponent } from '../dashboard/help-desk/tickets-in-progress/tickets-in-progress.component';
import { TicketsResolvedComponent } from '../dashboard/help-desk/tickets-resolved/tickets-resolved.component';
import { TicketsClosedComponent } from '../dashboard/help-desk/tickets-closed/tickets-closed.component';
import { NewTicketsCreatedComponent } from '../dashboard/help-desk/new-tickets-created/new-tickets-created.component';
import { FirstResponseTimeComponent } from '../dashboard/help-desk/first-response-time/first-response-time.component';
import { AveResolutionTimeComponent } from '../dashboard/help-desk/ave-resolution-time/ave-resolution-time.component';
import { CustomerSatisfactionComponent } from '../dashboard/help-desk/customer-satisfaction/customer-satisfaction.component';
import { MostLeadsComponent } from '../dashboard/crm/most-leads/most-leads.component';
import { CountryStatsComponent } from '../dashboard/crm/country-stats/country-stats.component';
import { TasksStatsComponent } from '../dashboard/crm/tasks-stats/tasks-stats.component';
import { EarningReportsComponent } from '../dashboard/crm/earning-reports/earning-reports.component';
import { StatsComponent } from '../dashboard/crm/stats/stats.component';
import { WorkingScheduleComponent } from '../dashboard/project-management/working-schedule/working-schedule.component';
import { ProjectsAnalysisComponent } from '../dashboard/project-management/projects-analysis/projects-analysis.component';
import { ChatProjectsUserComponent } from '../dashboard/project-management/chat-projects-user/chat-projects-user.component';
import { ToDoListComponent } from '../pages/project-management-page/pm-project-overview/to-do-list/to-do-list.component';
import { WelcomeComponent } from '../dashboard/lms/welcome/welcome.component';
import { ActiveCoursesComponent } from '../dashboard/lms/active-courses/active-courses.component';
import { EnrolledStudentsComponent } from '../dashboard/lms/enrolled-students/enrolled-students.component';
import { CompletionStatusComponent } from '../dashboard/lms/completion-status/completion-status.component';
import { TimeSpendingsComponent } from '../dashboard/lms/time-spendings/time-spendings.component';
import { AverageEnrollmentRateComponent } from '../dashboard/lms/average-enrollment-rate/average-enrollment-rate.component';
import { TodaysCourseComponent } from '../dashboard/lms/todays-course/todays-course.component';
import { SlaMonitoringComponent } from '../dashboard/help-desk/sla-monitoring/sla-monitoring.component';
import { TicketsSolvedAndCleatedComponent } from '../dashboard/help-desk/tickets-solved-and-cleated/tickets-solved-and-cleated.component';
import { PerformanceOfAgentsComponent } from '../dashboard/help-desk/performance-of-agents/performance-of-agents.component';
import { TicketsByChannelComponent } from '../dashboard/help-desk/tickets-by-channel/tickets-by-channel.component';
import { TicketsByTypeComponent } from '../dashboard/help-desk/tickets-by-type/tickets-by-type.component';
import { RecentCustomerRatingComponent } from '../dashboard/help-desk/recent-customer-rating/recent-customer-rating.component';
import { ProjectsOverviewComponent } from '../dashboard/project-management/projects-overview/projects-overview.component';
import { ProjectsRoadmapComponent } from '../dashboard/project-management/projects-roadmap/projects-roadmap.component';
import { TotalSalesComponent } from '../dashboard/ecommerce/total-sales/total-sales.component';
import { TotalOrdersComponent } from '../dashboard/ecommerce/total-orders/total-orders.component';
import { TotalCustomersComponent } from '../dashboard/ecommerce/total-customers/total-customers.component';
import { TotalRevenueComponent } from '../dashboard/ecommerce/total-revenue/total-revenue.component';
import { SalesOverviewComponent } from '../dashboard/ecommerce/sales-overview/sales-overview.component';

@Component({
    selector: 'app-widgets',
    standalone: true,
    imports: [RouterLink, TicketsOpenComponent, TicketsInProgressComponent, TicketsResolvedComponent, TicketsClosedComponent, NewTicketsCreatedComponent, FirstResponseTimeComponent, AveResolutionTimeComponent, CustomerSatisfactionComponent, MostLeadsComponent, CountryStatsComponent, TasksStatsComponent, EarningReportsComponent, StatsComponent, WorkingScheduleComponent, ProjectsAnalysisComponent, ChatProjectsUserComponent, ToDoListComponent, WelcomeComponent, ActiveCoursesComponent, EnrolledStudentsComponent, CompletionStatusComponent, TimeSpendingsComponent, AverageEnrollmentRateComponent, TodaysCourseComponent, SlaMonitoringComponent, TicketsSolvedAndCleatedComponent, PerformanceOfAgentsComponent, TicketsByChannelComponent, TicketsByTypeComponent, RecentCustomerRatingComponent, ProjectsOverviewComponent, ProjectsRoadmapComponent, TotalSalesComponent, TotalOrdersComponent, TotalCustomersComponent, TotalRevenueComponent, SalesOverviewComponent],
    templateUrl: './widgets.component.html',
    styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {}