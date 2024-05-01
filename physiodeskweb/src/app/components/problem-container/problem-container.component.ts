import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ProblemasTableComponent} from "../../problemas/components/problemas-table/problemas-table.component";
import {ProblemMuestraComponent} from "../../problemas/components/problem-muestra/problem-muestra.component";

@Component({
  selector: 'app-problem-container',
  standalone: true,
  imports: [
    RouterOutlet,
    ProblemasTableComponent,
    ProblemMuestraComponent
  ],
  templateUrl: './problem-container.component.html',
  styleUrl: './problem-container.component.css'
})
export class ProblemContainerComponent {

}
