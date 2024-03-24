import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-drp-comparison-ranges',
    standalone: true,
    imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatCardModule],
    templateUrl: './drp-comparison-ranges.component.html',
    styleUrl: './drp-comparison-ranges.component.scss'
})
export class DrpComparisonRangesComponent {

    // Date Range Picker Comparison Ranges
    campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
    });

}