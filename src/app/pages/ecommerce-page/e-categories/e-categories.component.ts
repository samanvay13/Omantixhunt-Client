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
    selector: 'app-e-categories',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
    templateUrl: './e-categories.component.html',
    styleUrl: './e-categories.component.scss'
})
export class ECategoriesComponent {

    displayedColumns: string[] = ['select', 'image', 'name', 'totalProducts', 'slug', 'description', 'status', 'action'];
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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.image + 1}`;
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
        image: 'assets/images/products/product1.png',
        name: 'Watch',
        totalProducts: 54,
        slug: 'watch',
        description: 'What is lorem ipsum?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product2.png',
        name: 'Mobile',
        totalProducts: 13,
        slug: 'mobile',
        description: 'Why do we use it?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product3.png',
        name: 'Laptop',
        totalProducts: 42,
        slug: 'laptop',
        description: 'Where does it come from?',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product4.png',
        name: 'Man',
        totalProducts: 32,
        slug: 'man',
        description: 'Where can I get some?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product5.png',
        name: 'Headphone',
        totalProducts: 100,
        slug: 'headphone',
        description: 'Contrary to popular belief',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product6.png',
        name: 'Yellow Watch',
        totalProducts: 22,
        slug: 'yellow-watch',
        description: 'There are many variations',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product7.png',
        name: 'Red Laptop',
        totalProducts: 64,
        slug: 'red-laptop',
        description: 'The standard chunk of lorem',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product8.png',
        name: 'Shoe',
        totalProducts: 52,
        slug: 'shoe',
        description: 'Non-characteristic words etc',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product9.png',
        name: 'Bag',
        totalProducts: 99,
        slug: 'bag',
        description: 'Can you help translate this',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product10.png',
        name: 'Jewelry',
        totalProducts: 34,
        slug: 'jewelry',
        description: 'If you use this site regularly',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product10.png',
        name: 'Jewelry',
        totalProducts: 34,
        slug: 'jewelry',
        description: 'If you use this site regularly',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product9.png',
        name: 'Bag',
        totalProducts: 99,
        slug: 'bag',
        description: 'Can you help translate this',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product8.png',
        name: 'Shoe',
        totalProducts: 52,
        slug: 'shoe',
        description: 'Non-characteristic words etc',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product7.png',
        name: 'Red Laptop',
        totalProducts: 64,
        slug: 'red-laptop',
        description: 'The standard chunk of lorem',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product6.png',
        name: 'Yellow Watch',
        totalProducts: 22,
        slug: 'yellow-watch',
        description: 'There are many variations',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product5.png',
        name: 'Headphone',
        totalProducts: 100,
        slug: 'headphone',
        description: 'Contrary to popular belief',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product4.png',
        name: 'Man',
        totalProducts: 32,
        slug: 'man',
        description: 'Where can I get some?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product3.png',
        name: 'Laptop',
        totalProducts: 42,
        slug: 'laptop',
        description: 'Where does it come from?',
        status: {
            // active: 'Active',
            deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product2.png',
        name: 'Mobile',
        totalProducts: 13,
        slug: 'mobile',
        description: 'Why do we use it?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        image: 'assets/images/products/product1.png',
        name: 'Watch',
        totalProducts: 54,
        slug: 'watch',
        description: 'What is lorem ipsum?',
        status: {
            active: 'Active',
            // deactive: 'Deactive',
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];

export interface PeriodicElement {
    image: string;
    name: string;
    totalProducts: number;
    slug: string;
    description: string;
    status: any;
    action: any;
}