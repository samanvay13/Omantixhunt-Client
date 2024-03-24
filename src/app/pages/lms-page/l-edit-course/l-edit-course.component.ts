import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-l-edit-course',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, NgxEditorModule],
    templateUrl: './l-edit-course.component.html',
    styleUrl: './l-edit-course.component.scss'
})
export class LEditCourseComponent {

    // Text Editor
    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    ngOnInit(): void {
        this.editor = new Editor();
    }

    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

    // File Uploader
    public multiple: boolean = false;

    // Instructor Select
    instructor = new FormControl('');
    instructorList: string[] = ['Ann Cohen', 'Lea Lewis', 'Lillie Walker', 'Lynn Flinn', 'Mark Rivera'];

    // Tags Select
    tags = new FormControl('');
    tagsList: string[] = ['Design', 'Writing', 'Security', 'Valuation', 'Angular'];

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

}