import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit{
    constructor(private productService: ProductsService, private router: Router) { }

    displayedColumns: string[] = ['id', 'name', 'description', 'price', 'image'];
    dataSource = new MatTableDataSource<any>();

    productsData: Product[] = [];

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe((res) => {
            this.productsData = res;
            this.dataSource = new MatTableDataSource<any>(this.productsData);
        });
    }

    getRow(row: any) {
        this.router.navigateByUrl(`/products/${row.id}`);
    }
}
