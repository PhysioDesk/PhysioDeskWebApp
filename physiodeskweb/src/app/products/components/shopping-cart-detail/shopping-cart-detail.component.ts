import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ProductsTableComponent} from "../products-table/products-table.component";
import {CartService} from "../../services/cart.service";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-shopping-cart-detail',
  standalone: true,
    imports: [
        MatButton,
        ProductsTableComponent,
        MatTableModule
    ],
  templateUrl: './shopping-cart-detail.component.html',
  styleUrl: './shopping-cart-detail.component.css'
})
export class ShoppingCartDetailComponent implements OnInit {
    productsData: any[] = [];

    dataSource = new MatTableDataSource<any>();
    displayedColumns: string[] = ['id', 'name', 'description', 'price', 'imagen', 'cantidad'];

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cartService.getData().subscribe(data => {
            this.productsData = data;
            this.dataSource = new MatTableDataSource<any>(this.productsData);
        });
    }

    clearCart() {
        this.cartService.clearCart();
    }

}
