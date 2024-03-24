import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-dp-paletter-colors',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule],
    templateUrl: './dp-paletter-colors.component.html',
    styleUrl: './dp-paletter-colors.component.scss'
})
export class DpPaletterColorsComponent {}