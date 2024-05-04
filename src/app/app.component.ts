import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./public/header/header.component";
import {SidebarComponent} from "./public/sidebar/sidebar.component";
import {MainContainerComponent} from "./pages/main-container/main-container.component";
import {NgIf} from "@angular/common";
import {LandingPageComponent} from "./pages/landing-page/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, HeaderComponent, SidebarComponent, NgIf, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'physiodeskweb';
  enPaginaEspecifica: boolean = false;
  constructor(protected router: Router) {
    this.router.events.subscribe((event) => {
      // Verificar si la ruta actual coincide con la página específica
      this.enPaginaEspecifica = this.router.url === 'main';
    });
  }
}
