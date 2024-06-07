import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-the-activities-page',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './the-activities-page.component.html',
  styleUrl: './the-activities-page.component.css'
})
export class TheActivitiesPageComponent {

}
