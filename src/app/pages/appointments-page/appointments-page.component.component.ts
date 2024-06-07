import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {
    PendingAppointmentsComponent
} from "../../bounded-context/appointments/components/pending-appointments/pending-appointments.component";
import {AppointTableComponentComponent} from "../../bounded-context/appointments/components/appoint-table.component/appoint-table.component.component";

@Component({
  selector: 'app-appointments-page.component',
  standalone: true,
    imports: [
        RouterOutlet,
        PendingAppointmentsComponent,
        AppointTableComponentComponent
    ],
  templateUrl: './appointments-page.component.component.html',
  styleUrl: './appointments-page.component.component.css'
})
export class AppointmentsPageComponentComponent {

}
