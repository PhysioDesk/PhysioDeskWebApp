import { Component } from '@angular/core';
import {SidebarComponent} from "../../public/sidebar/sidebar.component";

@Component({
  selector: 'app-personal-data-container',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './personal-data-container.component.html',
  styleUrl: './personal-data-container.component.css'
})
export class PersonalDataContainerComponent {

}
