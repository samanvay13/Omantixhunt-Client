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
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-events-list',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './events-list.component.html',
    styleUrl: './events-list.component.scss'
})
export class EventsListComponent {

    displayedColumns: string[] = ['select', 'eventID', 'eventName', 'dateAndTime', 'location', 'organizer', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.eventName + 1}`;
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
        eventID: '#258',
        eventName: 'Annual Conference 2023',
        dateAndTime: 'Dec 01, 2023 09:00 AM',
        location: 'Convention Center',
        organizer: 'ABC Corporation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#648',
        eventName: 'Leadership Summit 2023',
        dateAndTime: 'Dec 10, 2023 03:00 AM',
        location: 'Online',
        organizer: 'Marketing Pros',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#945',
        eventName: 'Product Launch Webinar',
        dateAndTime: 'Dec 15, 2023 06:00 PM',
        location: 'City Sky Lounge',
        organizer: 'Tech Solutions Inc.',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#186',
        eventName: 'AI in Healthcare Symposium',
        dateAndTime: 'Dec 20, 2023 09:00 AM',
        location: 'Training Center',
        organizer: 'Startup Hub',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#439',
        eventName: 'Tech Summit 2024',
        dateAndTime: 'Dec 25, 2023 02:30 PM',
        location: 'Tech Park Auditorium',
        organizer: 'Community Foundation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#752',
        eventName: 'Startup Pitch Day',
        dateAndTime: 'Dec 30, 2023 11:00 AM',
        location: 'Grand Hotel Ballroom',
        organizer: 'FutureTech Solutions',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#658',
        eventName: 'Workshop: Digital Marketing',
        dateAndTime: 'Jan 01, 2024 07:00 AM',
        location: 'Innovation Hub',
        organizer: 'Leadership Institute',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#951',
        eventName: 'Charity Gala Dinner',
        dateAndTime: 'Jan 10, 2024 03:00PM',
        location: 'Medical Center',
        organizer: 'XYZ Innovations',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#357',
        eventName: 'Web Development Seminar',
        dateAndTime: 'Jan 20, 2024 01:00 PM',
        location: 'Corporate HQ',
        organizer: 'DTech Institute',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#851',
        eventName: 'Networking Mixer',
        dateAndTime: 'Jan 30, 2024 10:00 AM',
        location: 'Online',
        organizer: 'ABC Corporation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#851',
        eventName: 'Networking Mixer',
        dateAndTime: 'Jan 30, 2024 10:00 AM',
        location: 'Online',
        organizer: 'ABC Corporation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#357',
        eventName: 'Web Development Seminar',
        dateAndTime: 'Jan 20, 2024 01:00 PM',
        location: 'Corporate HQ',
        organizer: 'DTech Institute',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#951',
        eventName: 'Charity Gala Dinner',
        dateAndTime: 'Jan 10, 2024 03:00PM',
        location: 'Medical Center',
        organizer: 'XYZ Innovations',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#658',
        eventName: 'Workshop: Digital Marketing',
        dateAndTime: 'Jan 01, 2024 07:00 AM',
        location: 'Innovation Hub',
        organizer: 'Leadership Institute',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#752',
        eventName: 'Startup Pitch Day',
        dateAndTime: 'Dec 30, 2023 11:00 AM',
        location: 'Grand Hotel Ballroom',
        organizer: 'FutureTech Solutions',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#439',
        eventName: 'Tech Summit 2024',
        dateAndTime: 'Dec 25, 2023 02:30 PM',
        location: 'Tech Park Auditorium',
        organizer: 'Community Foundation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#186',
        eventName: 'AI in Healthcare Symposium',
        dateAndTime: 'Dec 20, 2023 09:00 AM',
        location: 'Training Center',
        organizer: 'Startup Hub',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#945',
        eventName: 'Product Launch Webinar',
        dateAndTime: 'Dec 15, 2023 06:00 PM',
        location: 'City Sky Lounge',
        organizer: 'Tech Solutions Inc.',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#648',
        eventName: 'Leadership Summit 2023',
        dateAndTime: 'Dec 10, 2023 03:00 AM',
        location: 'Online',
        organizer: 'Marketing Pros',
        status: {
            // upcoming: 'Upcoming',
            past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        eventID: '#258',
        eventName: 'Annual Conference 2023',
        dateAndTime: 'Dec 01, 2023 09:00 AM',
        location: 'Convention Center',
        organizer: 'ABC Corporation',
        status: {
            upcoming: 'Upcoming',
            // past: 'Past',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    eventID: string;
    eventName: string;
    dateAndTime: string;
    location: string;
    organizer: string;
    status: any;
    action: any;
}