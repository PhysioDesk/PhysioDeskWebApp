import {Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FisiosModel} from "../../../fisioterapeutas/model/fisios.model";
import {FisiosServicesService} from "../../../fisioterapeutas/services/fisios-services.service";

@Component({
  selector: 'app-pending-appointment-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './pending-appointment-card.component.html',
  styleUrl: './pending-appointment-card.component.css'
})
export class PendingAppointmentCardComponent implements OnInit {

  @Input() appointment: any;
  physiotherapist!: any;

  constructor(private physioService: FisiosServicesService) {
  }

  ngOnInit() {
    this.getPhysiotherapist();
  }

  getPhysiotherapist() {
    this.physioService.getFisio(this.appointment["physiotherapistId"]).subscribe(
        (response: any) => {
          this.physiotherapist = response;
        }
    );
  }

}
