import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { APIService } from '../apiservice';

@Component({
    selector: 'app-notifications-page',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, NgIf, MatCheckboxModule, MatPaginatorModule],
    templateUrl: './notifications-page.component.html',
    styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

    displayedColumns: string[] = ['content', 'timestamp'];
    dataSource = new MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private http: HttpClient,
        private dialog: MatDialog,
        private apiSrv: APIService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.http.get<any[]>(this.apiSrv.URL + 'api/notifications')
            .subscribe(data => {
                data = data.reverse();
                this.dataSource.data = data.map((item, index) => ({
                    id: item._id,
                    notificationID: (index + 1).toString().padStart(2, '0') + '.',
                    content: { notificationName: item.statement },
                    timestamp: {createdAt: item.createdAt}
                }));
                this.dataSource.paginator = this.paginator;
            });
    }


    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
}
