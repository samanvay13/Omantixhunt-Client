import { NgClass, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { TicketsOpenComponent } from '../../../dashboard/help-desk/tickets-open/tickets-open.component';
import { TicketsInProgressComponent } from '../../../dashboard/help-desk/tickets-in-progress/tickets-in-progress.component';
import { TicketsResolvedComponent } from '../../../dashboard/help-desk/tickets-resolved/tickets-resolved.component';
import { TicketsClosedComponent } from '../../../dashboard/help-desk/tickets-closed/tickets-closed.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-hd-tickets',
    standalone: true,
    imports: [RouterLink, TicketsOpenComponent, TicketsInProgressComponent, TicketsResolvedComponent, TicketsClosedComponent, MatCardModule, MatMenuModule, MatButtonModule, MatTableModule, MatPaginatorModule, NgIf, MatTooltipModule, MatProgressBarModule, NgClass],
    templateUrl: './hd-tickets.component.html',
    styleUrl: './hd-tickets.component.scss'
})
export class HdTicketsComponent {

    displayedColumns: string[] = ['ticketID', 'subject', 'status', 'priority', 'requester', 'assignedAgents', 'createdDate', 'dueDate', 'action'];
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
        ticketID: '#951',
        subject: 'Login Issues',
        createdDate: '15 Nov, 2023',
        dueDate: '15 Dec, 2023',
        requester: 'Walter Frazier',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user5.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#547',
        subject: 'Email Configuration',
        createdDate: '14 Nov, 2023',
        dueDate: '14 Dec, 2023',
        requester: 'Kimberly Anderson',
        priority: 'Medium',
        assignedAgents: {
            img1: 'assets/images/users/user7.jpg',
            img2: 'assets/images/users/user9.jpg',
            img3: 'assets/images/users/user12.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#658',
        subject: 'Application Error',
        createdDate: '13 Nov, 2023',
        dueDate: '13 Dec, 2023',
        requester: 'Roscoe Guerrero',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user16.jpg',
            img2: 'assets/images/users/user17.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#367',
        subject: 'Software Installation',
        createdDate: '12 Nov, 2023',
        dueDate: '12 Dec, 2023',
        requester: 'Robert Stewart',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user11.jpg',
            img2: 'assets/images/users/user3.jpg',
            img3: 'assets/images/users/user8.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#469',
        subject: 'System Upgrade',
        createdDate: '11 Nov, 2023',
        dueDate: '11 Dec, 2023',
        requester: 'Dustin Fritch',
        priority: 'Medium',
        assignedAgents: {
            img1: 'assets/images/users/user15.jpg',
            img2: 'assets/images/users/user6.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#431',
        subject: 'Network Connectivity',
        createdDate: '10 Nov, 2023',
        dueDate: '10 Dec, 2023',
        requester: 'Carol Camacho',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user10.jpg',
            img2: 'assets/images/users/user5.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#547',
        subject: 'Vaxo App Design',
        createdDate: '09 Nov, 2023',
        dueDate: '09 Dec, 2023',
        requester: 'Robert Heinemann',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user7.jpg',
            img2: 'assets/images/users/user12.jpg',
            img3: 'assets/images/users/user16.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#658',
        subject: 'Aoriv AI Design',
        createdDate: '08 Nov, 2023',
        dueDate: '08 Dec, 2023',
        requester: 'Jonathan Jones',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user17.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#367',
        subject: 'Beja Banking Finance',
        createdDate: '07 Nov, 2023',
        dueDate: '07 Dec, 2023',
        requester: 'David Williams',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user3.jpg',
            img2: 'assets/images/users/user8.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#469',
        subject: 'Aegis Accounting Service',
        createdDate: '06 Nov, 2023',
        dueDate: '06 Dec, 2023',
        requester: 'Steve Smith',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user6.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#469',
        subject: 'Aegis Accounting Service',
        createdDate: '06 Nov, 2023',
        dueDate: '06 Dec, 2023',
        requester: 'Steve Smith',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user6.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#367',
        subject: 'Beja Banking Finance',
        createdDate: '07 Nov, 2023',
        dueDate: '07 Dec, 2023',
        requester: 'David Williams',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user3.jpg',
            img2: 'assets/images/users/user8.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#658',
        subject: 'Aoriv AI Design',
        createdDate: '08 Nov, 2023',
        dueDate: '08 Dec, 2023',
        requester: 'Jonathan Jones',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user17.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#547',
        subject: 'Vaxo App Design',
        createdDate: '09 Nov, 2023',
        dueDate: '09 Dec, 2023',
        requester: 'Robert Heinemann',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user7.jpg',
            img2: 'assets/images/users/user12.jpg',
            img3: 'assets/images/users/user16.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#431',
        subject: 'Network Connectivity',
        createdDate: '10 Nov, 2023',
        dueDate: '10 Dec, 2023',
        requester: 'Carol Camacho',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user10.jpg',
            img2: 'assets/images/users/user5.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#469',
        subject: 'System Upgrade',
        createdDate: '11 Nov, 2023',
        dueDate: '11 Dec, 2023',
        requester: 'Dustin Fritch',
        priority: 'Medium',
        assignedAgents: {
            img1: 'assets/images/users/user15.jpg',
            img2: 'assets/images/users/user6.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#367',
        subject: 'Software Installation',
        createdDate: '12 Nov, 2023',
        dueDate: '12 Dec, 2023',
        requester: 'Robert Stewart',
        priority: 'Low',
        assignedAgents: {
            img1: 'assets/images/users/user11.jpg',
            img2: 'assets/images/users/user3.jpg',
            img3: 'assets/images/users/user8.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#658',
        subject: 'Application Error',
        createdDate: '13 Nov, 2023',
        dueDate: '13 Dec, 2023',
        requester: 'Roscoe Guerrero',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user16.jpg',
            img2: 'assets/images/users/user17.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            // pending: 'Pending',
            open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#547',
        subject: 'Email Configuration',
        createdDate: '14 Nov, 2023',
        dueDate: '14 Dec, 2023',
        requester: 'Kimberly Anderson',
        priority: 'Medium',
        assignedAgents: {
            img1: 'assets/images/users/user7.jpg',
            img2: 'assets/images/users/user9.jpg',
            img3: 'assets/images/users/user12.jpg'
        },
        status: {
            // inProgress: 'In Progress',
            pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        ticketID: '#951',
        subject: 'Login Issues',
        createdDate: '15 Nov, 2023',
        dueDate: '15 Dec, 2023',
        requester: 'Walter Frazier',
        priority: 'High',
        assignedAgents: {
            img1: 'assets/images/users/user5.jpg',
            img2: 'assets/images/users/user13.jpg'
        },
        status: {
            inProgress: 'In Progress',
            // pending: 'Pending',
            // open: 'Open',
            // closed: 'Closed',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    }
];
export interface PeriodicElement {
    ticketID: string;
    subject: string;
    createdDate: string;
    dueDate: string;
    requester: string;
    priority: string;
    assignedAgents: any;
    status: any;
    action: any;
}