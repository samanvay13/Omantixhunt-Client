import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-datepicker-action-buttons',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatCardModule, MatNativeDateModule],
    templateUrl: './datepicker-action-buttons.component.html',
    styleUrl: './datepicker-action-buttons.component.scss'
})
export class DatepickerActionButtonsComponent {}