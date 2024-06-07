import {Component, OnInit} from '@angular/core';
import {AppointmentsService} from "../../services/appointments.service";
import {FisiosServicesService} from "../../../fisioterapeutas/services/fisios-services.service";
import {FisiosModel} from "../../../fisioterapeutas/model/fisios.model";
import {PendingAppointmentCardComponent} from "../pending-appointment-card/pending-appointment-card.component";

@Component({
  selector: 'app-pending-appointments',
  standalone: true,
  imports: [
    PendingAppointmentCardComponent
  ],
  templateUrl: './pending-appointments.component.html',
  styleUrl: './pending-appointments.component.css'
})
export class PendingAppointmentsComponent implements OnInit{

  appointments: any[] = [];

  constructor(private appointmentService: AppointmentsService, private physioService: FisiosServicesService) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((res) => {
        this.appointments = res;
    });
  }
}
