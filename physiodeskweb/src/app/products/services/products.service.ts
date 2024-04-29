import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

baseUrl = environment.baseURL + '/productos';

  constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>(this.baseUrl);
    }

    getProduct(index: any) {
        return this.http.get<any>(`${this.baseUrl}/${index}`);
    }
}
