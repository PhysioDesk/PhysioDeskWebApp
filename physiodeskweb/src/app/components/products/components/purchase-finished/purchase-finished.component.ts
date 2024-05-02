import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CartService} from "../../services/cart.service";
import {MatListModule} from '@angular/material/list';
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-purchase-finished',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatListModule, MatLine],
  templateUrl: './purchase-finished.component.html',
  styleUrl: './purchase-finished.component.css'
})
export class PurchaseFinishedComponent implements OnInit{

  productsData: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getData().subscribe(data => {
      this.productsData = data;
    });
  }
}
