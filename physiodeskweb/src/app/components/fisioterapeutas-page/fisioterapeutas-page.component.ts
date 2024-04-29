import { Component } from '@angular/core';
import {FisiosTableComponent} from "../../fisioterapeutas/components/fisios-table/fisios-table.component";

@Component({
  selector: 'app-fisioterapeutas-page',
  standalone: true,
  imports: [
    FisiosTableComponent
  ],
  templateUrl: './fisioterapeutas-page.component.html',
  styleUrl: './fisioterapeutas-page.component.css'
})
export class FisioterapeutasPageComponent {

}
