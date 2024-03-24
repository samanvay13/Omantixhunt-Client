import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-select-custom-trigger-text',
    standalone: true,
    imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
    templateUrl: './select-custom-trigger-text.component.html',
    styleUrl: './select-custom-trigger-text.component.scss'
})
export class SelectCustomTriggerTextComponent {

    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}