import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import {FisiosServicesService} from "../../services/fisios-services.service";

@Component({
  selector: 'app-fisio-detail',
  standalone: true,
  imports: [ MatCard, MatCardContent],
  templateUrl: './fisio-detail.component.html',
  styleUrl: './fisio-detail.component.scss'
})
export class FisioDetailComponent {
  nombre: any = '';
  imagen ='';
  biografia: any = '';
  edad: any='';
  horarios: any='';


  constructor(private FisiosServicesService: FisiosServicesService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getFisios(params['id']);
      }
    );
  }

  getFisios(id: any){
    this.FisiosServicesService.getFisios(id).subscribe(
      res =>
      {
        console.log(res);
        this.nombre = res;
        this.imagen = this.nombre.imagen;
        this.horarios = this.nombre.horarios;

      },
      err =>{
        console.log(err);
      }
    );
  }


}
