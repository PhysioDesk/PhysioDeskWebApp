import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from '@angular/material/card';
import {FisiosServicesService} from "../../services/fisios-services.service";

@Component({
  selector: 'app-fisio-detail',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardImage, MatCardHeader],
  templateUrl: './fisio-detail.component.html',
  styleUrl: './fisio-detail.component.scss'
})
export class FisioDetailComponent {
  fisio: any = '';
  fisioImage = '';


  constructor(private FisiosServicesService: FisiosServicesService, private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getFisio(params['id']);
      }
    );
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

  handleConfirmHourClick() {
    if (this.isHorarioSelected) {
      this.router.navigate(['/confirmacion']);
    }
  }


  handleHorarioClick(event: any) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('selected');
    }
    this.selectedButton = event.target;
    if (this.selectedButton) {
      this.selectedButton.classList.add('selected');
      this.isHorarioSelected = true;
    }
  }


}




