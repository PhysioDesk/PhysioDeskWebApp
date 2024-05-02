import { Component } from '@angular/core';
import {SidebarComponent} from "../../public/sidebar/sidebar.component";
import {
  FisiosTableComponent
} from "../../bounded-context/fisioterapeutas/components/fisios-table/fisios-table.component";

@Component({
  selector: 'app-personal-data-container',
  standalone: true,
    imports: [
        SidebarComponent,
        FisiosTableComponent
    ],
  templateUrl: './personal-data-container.component.html',
  styleUrl: './personal-data-container.component.css'
})
export class PersonalDataContainerComponent {

}
