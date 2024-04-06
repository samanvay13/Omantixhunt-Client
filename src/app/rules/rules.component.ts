import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-rules',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.scss'
})
export class RulesComponent implements OnInit {

    displayedColumns: string[] = ['number', 'product'];
    dataSource = new MatTableDataSource<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private http: HttpClient
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.http.get<any[]>('https://omantixhunt-server.onrender.com/api/rules')
            .subscribe(data => {
                this.dataSource.data = data.map((item, index) => ({
                    number: (index + 1).toString().padStart(2, '0') + '.',
                    product: { productName: item.statement }
                }));
                this.dataSource.paginator = this.paginator;
            });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
