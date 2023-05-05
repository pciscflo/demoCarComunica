import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'Fanta',1, 100),
    new Product(2, 'Product 2', 'Sprite!',1, 150),
    new Product(3, 'Product 3', 'Concordia',1, 50),
    new Product(4, 'Product 4', 'Pepsi', 1, 200),
    new Product(5, 'Product 5', 'Bimbo', 1,100),
    new Product(6, 'Product 6', 'Big Kola',1, 150),
    new Product(7, 'Product 7', 'Oro', 1,250),
    new Product(8, 'Product 8', 'Soda', 1,300),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

  addProductToCart(products: any) {
    localStorage.setItem("product", JSON.stringify(products));
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem("product") as string);
  }
  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }
}
