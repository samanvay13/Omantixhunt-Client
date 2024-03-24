import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-vertical',
    standalone: true,
    imports: [
        MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    templateUrl: './vertical.component.html',
    styleUrl: './vertical.component.scss'
})
export class VerticalComponent {}