import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-members-page',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './members-page.component.html',
    styleUrl: './members-page.component.scss'
})
export class MembersPageComponent {

    displayedColumns: string[] = ['id', 'member', 'email', 'location', 'phone', 'joiningDate', 'lastActive', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        id: '#158',
        member: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        location: 'Washington D.C',
        phone: '+1 555-445-4455',
        lastActive: '01 Dec, 2023 08:23 AM',
        joiningDate: '01 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#325',
        member: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        location: 'Chicago',
        phone: '+1 555-455-9966',
        lastActive: '02 Dec, 2023 05:09 PM',
        joiningDate: '02 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#286',
        member: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        location: 'Oklahoma City',
        phone: '+1 555-555-9922',
        lastActive: '03 Dec, 2023 09:30 AM',
        joiningDate: '03 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#463',
        member: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        location: 'San Diego',
        phone: '+1 555-445-7788',
        lastActive: '04 Dec, 2023 10:22 AM',
        joiningDate: '04 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#491',
        member: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        location: 'Los Angeles',
        phone: '+1 555-333-2288',
        lastActive: '05 Dec, 2023 08:49 AM',
        joiningDate: '05 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#860',
        member: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        location: 'Las Vegas',
        phone: '+1 555-445-4455',
        lastActive: '06 Dec, 2023 04:35 PM',
        joiningDate: '06 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#431',
        member: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        location: 'San Francisco',
        phone: '+1 555-555-9922',
        lastActive: '07 Dec, 2023 06:13 PM',
        joiningDate: '07 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#998',
        member: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        location: 'Washington D.C',
        phone: '+1 555-455-9966',
        lastActive: '08 Dec, 2023 02:20 AM',
        joiningDate: '08 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#436',
        member: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        location: 'San Diego',
        phone: '+1 555-333-2288',
        lastActive: '09 Dec, 2023 12:09 AM',
        joiningDate: '10 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#125',
        member: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        location: 'Chicago',
        phone: '+1 555-445-7788',
        lastActive: '10 Dec, 2023 06:03 PM',
        joiningDate: '11 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#125',
        member: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey'
        },
        email: 'hulsey@example.com',
        location: 'Chicago',
        phone: '+1 555-445-7788',
        lastActive: '10 Dec, 2023 06:03 PM',
        joiningDate: '12 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#436',
        member: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson'
        },
        email: 'wildon@example.com',
        location: 'San Diego',
        phone: '+1 555-333-2288',
        lastActive: '09 Dec, 2023 12:09 AM',
        joiningDate: '13 Dec, 2023',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#998',
        member: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock'
        },
        email: 'haddock@example.com',
        location: 'Washington D.C',
        phone: '+1 555-455-9966',
        lastActive: '08 Dec, 2023 02:20 AM',
        joiningDate: '14 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#431',
        member: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather'
        },
        email: 'robert@example.com',
        location: 'San Francisco',
        phone: '+1 555-555-9922',
        lastActive: '07 Dec, 2023 06:13 PM',
        joiningDate: '15 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#860',
        member: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty'
        },
        email: 'ramiro@example.com',
        location: 'Las Vegas',
        phone: '+1 555-445-4455',
        lastActive: '06 Dec, 2023 04:35 PM',
        joiningDate: '16 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#491',
        member: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block'
        },
        email: 'block@example.com',
        location: 'Los Angeles',
        phone: '+1 555-333-2288',
        lastActive: '05 Dec, 2023 08:49 AM',
        joiningDate: '17 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#463',
        member: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross'
        },
        email: 'cross@example.com',
        location: 'San Diego',
        phone: '+1 555-445-7788',
        lastActive: '04 Dec, 2023 10:22 AM',
        joiningDate: '18 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#286',
        member: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller'
        },
        email: 'donna@example.com',
        location: 'Oklahoma City',
        phone: '+1 555-555-9922',
        lastActive: '03 Dec, 2023 09:30 AM',
        joiningDate: '19 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#325',
        member: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes'
        },
        email: 'barnes@example.com',
        location: 'Chicago',
        phone: '+1 555-455-9966',
        lastActive: '02 Dec, 2023 05:09 PM',
        joiningDate: '20 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#579',
        member: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker'
        },
        email: 'marcia@example.com',
        location: 'Washington D.C',
        phone: '+1 555-445-4455',
        lastActive: '01 Dec, 2023 08:23 AM',
        joiningDate: '21 Dec, 2023',
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    }
];

export interface PeriodicElement {
    id: string;
    member: any;
    email: string;
    location: string;
    phone: string;
    lastActive: string;
    joiningDate: string;
    action: any;
}