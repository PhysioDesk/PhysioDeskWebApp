import { Component } from '@angular/core';
import {FisiosTableComponent} from "../../fisioterapeutas/components/fisios-table/fisios-table.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-fisioterapeutas-page',
  standalone: true,
  imports: [
    FisiosTableComponent,
    RouterOutlet
  ],
  templateUrl: './fisioterapeutas-page.component.html',
  styleUrl: './fisioterapeutas-page.component.css'
})
export class FisioterapeutasPageComponent {

}
