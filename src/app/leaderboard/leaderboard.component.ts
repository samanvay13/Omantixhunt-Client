import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-leaderboard',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './leaderboard.component.html',
    styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

    displayedColumns: string[] = ['rank', 'username', 'level'];
    dataSource = new MatTableDataSource<RankingElement>(ELEMENT_DATA);
    selection = new SelectionModel<RankingElement>(true, []);
}

const ELEMENT_DATA: RankingElement[] = [
    {
        rank: 1,
        username: 'walter0102',
        level: 9
    },
    {
        rank: 2,
        username: 'xangelax21',
        level: 9
    },{
        rank: 3,
        username: 't_brad08',
        level: 8
    },{
        rank: 4,
        username: 'acc123',
        level: 8
    },{
        rank: 5,
        username: 'tom_45',
        level: 8
    },{
        rank: 6,
        username: 'jordanjr',
        level: 7
    },{
        rank: 7,
        username: 'noobiegamer66',
        level: 6
    },{
        rank: 8,
        username: 'kal_el',
        level: 5
    },{
        rank: 9,
        username: 'raze987',
        level: 2
    },{
        rank: 10,
        username: 'badjeet07',
        level: 1
    },
];

export interface RankingElement {
    rank: number,
    username: string,
    level: number
}