import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet, Event} from '@angular/router';
import {HeaderComponent} from "./public/header/header.component";
import {SidebarComponent} from "./public/sidebar/sidebar.component";
import {MainContainerComponent} from "./pages/main-container/main-container.component";
import {NgIf} from "@angular/common";
import {LandingPageComponent} from "./pages/landing-page/landing-page/landing-page.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, HeaderComponent, SidebarComponent, NgIf, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeaderAndSidebar: boolean = true;

  constructor(private router: Router) {
    // Escucha los cambios de ruta
    this.router.events.pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica si la ruta actual es '/main'
      this.showHeaderAndSidebar = event.url !== '/main';
      console.log(this.showHeaderAndSidebar)
    });
  }
}
