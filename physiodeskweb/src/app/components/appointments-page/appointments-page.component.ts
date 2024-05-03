import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-appointments-page',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './appointments-page.component.html',
  styleUrl: './appointments-page.component.css'
})
export class AppointmentsPageComponent {

}
