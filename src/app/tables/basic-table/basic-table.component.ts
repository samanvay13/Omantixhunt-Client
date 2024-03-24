import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopSellersComponent } from './top-sellers/top-sellers.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { UsersComponent } from './users/users.component';

@Component({
    selector: 'app-basic-table',
    standalone: true,
    imports: [RouterLink, TopSellersComponent, CountryStatsComponent, TeamMembersComponent, UsersComponent],
    templateUrl: './basic-table.component.html',
    styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {}