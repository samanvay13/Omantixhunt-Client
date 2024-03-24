import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-instructors',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule],
    templateUrl: './top-instructors.component.html',
    styleUrl: './top-instructors.component.scss'
})
export class TopInstructorsComponent {

    displayedColumns: string[] = ['user', 'ratings'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        user: {
            img: 'assets/images/users/user6.jpg',
            name: 'Mark Stjohn',
            number: 'mark@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-fill',
            overallStar: '5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user7.jpg',
            name: 'Joan Stanley',
            number: 'joan@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.9'
        }
    },
    {
        user: {
            img: 'assets/images/users/user8.jpg',
            name: 'Jacob Bell',
            number: 'jacob@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-fill',
            overallStar: '5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user9.jpg',
            name: 'Donald Bryan',
            number: 'donald@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-line',
            overallStar: '4'
        }
    },
    {
        user: {
            img: 'assets/images/users/user10.jpg',
            name: 'Kristina Blomquist',
            number: 'kristina@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user11.jpg',
            name: 'Jeffrey Morrison',
            number: 'jaffrey@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user1.jpg',
            name: 'David Warner',
            number: 'david@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-fill',
            overallStar: '5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user2.jpg',
            name: 'Alina Smith',
            number: 'mark@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.9'
        }
    },
    {
        user: {
            img: 'assets/images/users/user3.jpg',
            name: 'James Andy',
            number: 'mark@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-fill',
            overallStar: '5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user4.jpg',
            name: 'Oliva Lucy',
            number: 'olivia@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-line',
            overallStar: '4'
        }
    },
    {
        user: {
            img: 'assets/images/users/user5.jpg',
            name: 'Mark Chapman',
            number: 'chapman@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.5'
        }
    },
    {
        user: {
            img: 'assets/images/users/user12.jpg',
            name: 'Will Young',
            number: 'will@daxa.com'
        },
        ratings: {
            star1: 'ri-star-fill',
            star2: 'ri-star-fill',
            star3: 'ri-star-fill',
            star4: 'ri-star-fill',
            star5: 'ri-star-half-fill',
            overallStar: '4.5'
        }
    }
];

export interface PeriodicElement {
    user: any;
    ratings: any;
}