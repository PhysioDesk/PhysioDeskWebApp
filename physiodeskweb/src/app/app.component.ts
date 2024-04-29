import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {HeaderComponent} from "./public/header/header.component";
import {SidebarComponent} from "./public/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'physiodeskweb';
}
