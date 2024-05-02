import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {
  FisiosTableComponent
} from "../../bounded-context/fisioterapeutas/components/fisios-table/fisios-table.component";

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
