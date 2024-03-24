import { Component } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { MostLeadsComponent } from './most-leads/most-leads.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { EarningReportsComponent } from './earning-reports/earning-reports.component';
import { TasksStatsComponent } from './tasks-stats/tasks-stats.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { RecentLeadsComponent } from './recent-leads/recent-leads.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ClientPaymentStatusComponent } from './client-payment-status/client-payment-status.component';
import { TotalLeadsComponent } from './total-leads/total-leads.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-crm',
    standalone: true,
    imports: [StatsComponent, MostLeadsComponent, CountryStatsComponent, EarningReportsComponent, TasksStatsComponent, TopCustomersComponent, RecentLeadsComponent, ToDoListComponent, ClientPaymentStatusComponent, TotalLeadsComponent, RouterLink],
    templateUrl: './crm.component.html',
    styleUrl: './crm.component.scss'
})
export class CrmComponent {}