import {Component, Inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MAT_DIALOG_DATA,
    MatDialogRef
} from "@angular/material/dialog";
import {AppointmentsService} from "../../../appointments/services/appointments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirmation-time',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle
    ],
  templateUrl: './confirmation-time.component.html',
  styleUrl: './confirmation-time.component.css'
})
export class ConfirmationTimeComponent implements OnInit {

    physioId !: any;
    userId !: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ConfirmationTimeComponent>,
        private appointmentsService: AppointmentsService,
        private activatedRouter: ActivatedRoute
    ) {}

    ngOnInit(): void {

        console.log(this.data.physioId)
        this.userId = localStorage.getItem('user_id');

    }

    createAppointment() {

        const appointment = {
            patientId: parseInt(this.userId),
            physiotherapistId: parseInt(this.data.physioId),
            date: this.data.time["fecha"],
            time: this.data.time["hora"]
        }



        this.appointmentsService.createAppointment(appointment).subscribe(
            (res) => {
                console.log(res);
            },
            (error) => {
                console.log(error);
            }
        );

    }

}
