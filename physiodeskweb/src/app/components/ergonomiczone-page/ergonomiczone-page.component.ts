import { Component } from '@angular/core';
import {ProductsTableComponent} from "../../products/components/products-table/products-table.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-ergonomiczone-page',
  standalone: true,
  imports: [
    ProductsTableComponent,
    RouterOutlet
  ],
  templateUrl: './ergonomiczone-page.component.html',
  styleUrl: './ergonomiczone-page.component.css'
})
export class ErgonomiczonePageComponent {

}
