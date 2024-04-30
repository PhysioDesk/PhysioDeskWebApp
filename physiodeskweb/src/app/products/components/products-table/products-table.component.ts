import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {Product} from "../../models/product.model";
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-products-table',
  standalone: true,
    imports: [MatTableModule, MatFormFieldModule, FormsModule, MatInputModule, MatPaginator],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit{
    constructor(private productService: ProductsService, private router: Router) { }

    displayedColumns: string[] = ['id', 'name', 'description', 'price', 'imagen'];
    dataSource = new MatTableDataSource<any>();

    @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

    productsData: Product[] = [];

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe((res) => {
            this.productsData = res;
            this.dataSource = new MatTableDataSource<any>(this.productsData);
            this.dataSource.paginator = this.paginator;
        });
    }

    getRow(row: any) {
        this.router.navigateByUrl(`/products/${row.id}`);
    }

    applyFilter(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const filteredValue = inputElement.value.replace(/[^a-zA-Z ]/g, '');
        inputElement.value = filteredValue;

        this.dataSource.filterPredicate = (data: any, filter: string) => {
            return data.name.trim().toLowerCase().includes(filter);
        };

        this.dataSource.filter = filteredValue.toLowerCase();

        if(this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
