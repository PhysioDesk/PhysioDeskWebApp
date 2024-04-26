import {Component, ViewEncapsulation} from '@angular/core';
import {SidebarComponent} from "../../public/sidebar/sidebar.component";
import {RouterOutlet, Router, NavigationEnd, ActivatedRoute} from "@angular/router";
import {OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {CardWelcomeComponent} from "../../public/card-welcome/card-welcome.component";
import {PersonalDataContainerComponent} from "../personal-data-container/personal-data-container.component";
import {ProblemContainerComponent} from "../problem-container/problem-container.component";
@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    NgIf,
    CardWelcomeComponent,
    PersonalDataContainerComponent,
    ProblemContainerComponent
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',

})
export class MainContainerComponent implements OnInit {
  rutaActual: string='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });
  }
}
