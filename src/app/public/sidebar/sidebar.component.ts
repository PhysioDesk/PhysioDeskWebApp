import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatSidenav,
    MatSidenavModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
