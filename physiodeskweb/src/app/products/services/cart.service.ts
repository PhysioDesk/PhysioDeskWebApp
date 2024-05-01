import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface ProductCart {
    id: any;
    name: any;
    description: any;
    price: any;
    imagen: any;
    cantidad?: any;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private dataSource = new BehaviorSubject<any[]>(this.loadInitialData());
  currentData = this.dataSource.asObservable();

  constructor() { }

  updateData(newData: any) {
    let products = this.dataSource.value;
    const existingProductIndex = products.findIndex(p => p.id === newData.id);

    if (existingProductIndex > -1) {
      products[existingProductIndex].cantidad = (products[existingProductIndex].cantidad || 0) + 1;
    } else {
      newData.cantidad = 1;
      products = [...products, newData];
    }

    this.dataSource.next(products);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  getData() {
    return this.currentData;
  }

  loadInitialData() {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.dataSource.next([]);
  }

}
