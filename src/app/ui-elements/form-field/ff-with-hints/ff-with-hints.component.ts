import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-ff-with-hints',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule],
    templateUrl: './ff-with-hints.component.html',
    styleUrl: './ff-with-hints.component.scss'
})
export class FfWithHintsComponent {}