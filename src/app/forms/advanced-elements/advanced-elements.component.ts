import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

@Component({
    selector: 'app-advanced-elements',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, NgxMatTimepickerModule, MatIconModule, MatButtonModule, AdvancedFormComponent],
    templateUrl: './advanced-elements.component.html',
    styleUrl: './advanced-elements.component.scss'
})
export class AdvancedElementsComponent {

    // ToppingList
    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}