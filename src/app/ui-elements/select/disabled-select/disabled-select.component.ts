import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-disabled-select',
    standalone: true,
    imports: [
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    templateUrl: './disabled-select.component.html',
    styleUrl: './disabled-select.component.scss'
})
export class DisabledSelectComponent {}