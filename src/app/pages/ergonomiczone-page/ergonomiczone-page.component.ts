import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {
  ProductsTableComponent
} from "../../bounded-context/products/components/products-table/products-table.component";

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
