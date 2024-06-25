import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    baseUrl = environment.baseURL + '/products';


    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>(this.baseUrl);
    }

    getProduct(index: any) {
        return this.http.get<any>(`${this.baseUrl}/${index}`);
    }

}
