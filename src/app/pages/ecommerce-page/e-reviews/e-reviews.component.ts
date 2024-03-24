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
    selector: 'app-e-reviews',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './e-reviews.component.html',
    styleUrl: './e-reviews.component.scss'
})
export class EReviewsComponent {

    displayedColumns: string[] = ['select', 'id', 'product', 'customerReview', 'rating', 'createdDate', 'status', 'action'];
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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.product + 1}`;
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
        id: '#134',
        product: {
            img: 'assets/images/products/product6.png',
            name: 'Hand Watch'
        },
        customerReview: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras. Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 10, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#312',
        product: {
            img: 'assets/images/products/product3.png',
            name: 'Gaming Laptop'
        },
        customerReview: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes',
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
        },
        rating: '4.5',
        createdDate: 'Nov 11, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#532',
        product: {
            img: 'assets/images/products/product8.png',
            name: 'Sports Shoes'
        },
        customerReview: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller',
            review: `When an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        rating: '4.0',
        createdDate: 'Nov 12, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#142',
        product: {
            img: 'assets/images/products/product9.png',
            name: 'Woman Handbag'
        },
        customerReview: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross',
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        rating: '3.5',
        createdDate: 'Nov 13, 2023',
        status: {
            // approved: 'Approved',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#564',
        product: {
            img: 'assets/images/products/product10.png',
            name: 'Luxury Rendering'
        },
        customerReview: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block',
            review: `Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '3.0',
        createdDate: 'Nov 14, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#175',
        product: {
            img: 'assets/images/products/product5.png',
            name: 'Wireless Headphone'
        },
        customerReview: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras. Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 15, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#122',
        product: {
            img: 'assets/images/products/product11.png',
            name: 'Futuristic Bracelet'
        },
        customerReview: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather',
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        rating: '4.5',
        createdDate: 'Nov 16, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#875',
        product: {
            img: 'assets/images/products/product12.png',
            name: 'Mobile Device'
        },
        customerReview: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock',
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
        },
        rating: '5.0',
        createdDate: 'Nov 17, 2023',
        status: {
            // approved: 'Approved',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#412',
        product: {
            img: 'assets/images/products/product13.png',
            name: 'Triblend T-shirt'
        },
        customerReview: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson',
            review: `Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 18, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#897',
        product: {
            img: 'assets/images/products/product14.png',
            name: 'Camera Lens'
        },
        customerReview: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras.`
        },
        rating: '4.0',
        createdDate: 'Nov 19, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#897',
        product: {
            img: 'assets/images/products/product14.png',
            name: 'Camera Lens'
        },
        customerReview: {
            img: 'assets/images/users/user14.jpg',
            name: 'Nathaniel Hulsey',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras.`
        },
        rating: '4.0',
        createdDate: 'Nov 19, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#412',
        product: {
            img: 'assets/images/products/product13.png',
            name: 'Triblend T-shirt'
        },
        customerReview: {
            img: 'assets/images/users/user13.jpg',
            name: 'Thomas Wilson',
            review: `Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 18, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#875',
        product: {
            img: 'assets/images/products/product12.png',
            name: 'Mobile Device'
        },
        customerReview: {
            img: 'assets/images/users/user6.jpg',
            name: 'Marcelino Haddock',
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
        },
        rating: '5.0',
        createdDate: 'Nov 17, 2023',
        status: {
            // approved: 'Approved',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#122',
        product: {
            img: 'assets/images/products/product11.png',
            name: 'Futuristic Bracelet'
        },
        customerReview: {
            img: 'assets/images/users/user1.jpg',
            name: 'Robert Fairweather',
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        rating: '4.5',
        createdDate: 'Nov 16, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#175',
        product: {
            img: 'assets/images/products/product5.png',
            name: 'Wireless Headphone'
        },
        customerReview: {
            img: 'assets/images/users/user9.jpg',
            name: 'Ramiro McCarty',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras. Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 15, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#564',
        product: {
            img: 'assets/images/products/product10.png',
            name: 'Luxury Rendering'
        },
        customerReview: {
            img: 'assets/images/users/user16.jpg',
            name: 'Rebecca Block',
            review: `Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '3.0',
        createdDate: 'Nov 14, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#142',
        product: {
            img: 'assets/images/products/product9.png',
            name: 'Woman Handbag'
        },
        customerReview: {
            img: 'assets/images/users/user5.jpg',
            name: 'Barbara Cross',
            review: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
        },
        rating: '3.5',
        createdDate: 'Nov 13, 2023',
        status: {
            // approved: 'Approved',
            // pending: 'Pending',
            rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#532',
        product: {
            img: 'assets/images/products/product8.png',
            name: 'Sports Shoes'
        },
        customerReview: {
            img: 'assets/images/users/user12.jpg',
            name: 'Donna Miller',
            review: `When an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        rating: '4.0',
        createdDate: 'Nov 12, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#312',
        product: {
            img: 'assets/images/products/product3.png',
            name: 'Gaming Laptop'
        },
        customerReview: {
            img: 'assets/images/users/user7.jpg',
            name: 'Carolyn Barnes',
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`
        },
        rating: '4.5',
        createdDate: 'Nov 11, 2023',
        status: {
            // approved: 'Approved',
            pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    },
    {
        id: '#134',
        product: {
            img: 'assets/images/products/product6.png',
            name: 'Hand Watch'
        },
        customerReview: {
            img: 'assets/images/users/user15.jpg',
            name: 'Marcia Baker',
            review: `Auctor in nam malesuada auctor ultrices proin condimentum leo cras. Ultrices a quam massa tincidunt dictum luctus cursus.`
        },
        rating: '5.0',
        createdDate: 'Nov 10, 2023',
        status: {
            approved: 'Approved',
            // pending: 'Pending',
            // rejected: 'Rejected',
        },
        action: {
            view: 'visibility',
            delete: 'delete'
        }
    }
];

export interface PeriodicElement {
    id: string;
    product: any;
    customerReview: any;
    rating: string;
    createdDate: string;
    status: any;
    action: any;
}