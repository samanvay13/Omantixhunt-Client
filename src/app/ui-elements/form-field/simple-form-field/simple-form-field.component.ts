import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-simple-form-field',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule],
    templateUrl: './simple-form-field.component.html',
    styleUrl: './simple-form-field.component.scss'
})
export class SimpleFormFieldComponent {}