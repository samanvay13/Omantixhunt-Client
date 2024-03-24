import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicAccordionComponent } from './basic-accordion/basic-accordion.component';
import { BasicExpansionComponent } from './basic-expansion/basic-expansion.component';
import { AdvanceAccordionComponent } from './advance-accordion/advance-accordion.component';
import { AdvanceExpansionComponent } from './advance-expansion/advance-expansion.component';

@Component({
    selector: 'app-faq-page',
    standalone: true,
    imports: [RouterLink, BasicAccordionComponent, BasicExpansionComponent, AdvanceAccordionComponent, AdvanceExpansionComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {}