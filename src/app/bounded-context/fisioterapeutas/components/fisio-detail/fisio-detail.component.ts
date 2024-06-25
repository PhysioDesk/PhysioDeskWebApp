import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from '@angular/material/card';
import {FisiosServicesService} from "../../services/fisios-services.service";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {AddingDialogComponent} from "../../../products/components/adding-dialog/adding-dialog.component";
import {ConfirmationTimeComponent} from "../confirmation-time/confirmation-time.component";

@Component({
  selector: 'app-fisio-detail',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardImage, MatCardHeader, MatButton],
  templateUrl: './fisio-detail.component.html',
  styleUrl: './fisio-detail.component.scss'
})
export class FisioDetailComponent implements OnInit{
  fisio: any = '';
  fisioImage = '';
  physioId: any;


  constructor(private FisiosServicesService: FisiosServicesService, private activatedRouter: ActivatedRoute, private router: Router, public dialog: MatDialog) {

  }

    ngOnInit(): void {
      this.physioId = this.activatedRouter.snapshot.paramMap.get('id');
      console.log(this.physioId)
      this.getFisio(this.physioId);
    }

  getFisio(id: any) {
    this.FisiosServicesService.getFisio(id).subscribe(
      (res: any) => {
        this.fisio = res;
        this.fisioImage = this.fisio.sprites.front_shiny;
      },
    );
  }

  selectedButton: HTMLElement | null = null;
  isHorarioSelected: boolean = false;

  openDialog(time: any) {
    this.dialog.open(ConfirmationTimeComponent, {
        data: {
          time,
          physioId: this.physioId
        }
    });
  }


}




