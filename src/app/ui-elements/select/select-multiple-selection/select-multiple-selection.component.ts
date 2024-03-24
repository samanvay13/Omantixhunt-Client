import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-select-multiple-selection',
    standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
    templateUrl: './select-multiple-selection.component.html',
    styleUrl: './select-multiple-selection.component.scss'
})
export class SelectMultipleSelectionComponent {

    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}