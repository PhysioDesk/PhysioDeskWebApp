import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    MatCardImage, MatCardModule, MatButtonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent {

      product: any = '';
      productImage = '';

      constructor(private ProductService: ProductsService, private activatedRouter: ActivatedRoute) {
         this.activatedRouter.params.subscribe(params => {
            this.getProduct(params['id']);
         });
      }

      getProduct(id: any) {
        this.ProductService.getProduct(id).subscribe(
            (res: any)  => {
              this.product = res;
              this.productImage = this.product.sprites.front_shiny;
            },
        );
      }
}
