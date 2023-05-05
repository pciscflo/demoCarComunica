import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {

  productAddedToCart: Product[];
  allTotal: number;

  constructor(private messageService: MessageService, private productService: ProductService) { }

  ngOnInit(): void {

    console.log("Inicio de onInit de component");
    console.log("suscribiendo al obervador messageService para esperar un producto");
    this.messageService.getMsg().subscribe(product => {
       this.addProductToCar(product);
    });
    console.log("suscrito, ojo se lanzó el thread a esperar mensaje product")
    console.log("Obteniendo productos del local storage....")
    this.productAddedToCart = this.productService.getProductFromCart(); //se recupera lo que hay en localStorage

    for (let i in this.productAddedToCart) {
      this.productAddedToCart[i].quantity = 1;
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart); //todo el storage con 1 quantity
    this.calculteAllTotal(this.productAddedToCart); //total actual
  }

  addProductToCar(product: any) {
   // alert("Recibiendo:" + product.description);
    this.productAddedToCart = this.productService.getProductFromCart();
    if (this.productAddedToCart == null) {
      this.productAddedToCart = [];
      this.productAddedToCart.push(product);
      this.productService.addProductToCart(this.productAddedToCart);
    }
    else {
      let tempProduct = this.productAddedToCart.find(p => p.id == product.id);
      if (tempProduct == null) {

        this.productAddedToCart.push(product);
        this.productService.addProductToCart(this.productAddedToCart);
      }
      else {
        tempProduct.quantity++;
        this.productService.addProductToCart(this.productAddedToCart);
      }
    }
    this.calculteAllTotal(this.productAddedToCart);
  }

  calculteAllTotal(allItems: Product[]) {
    let total = 0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
    }
    this.allTotal = total;
  }

  removeAll() {
    this.productService.removeAllProductFromCart();
    this.productAddedToCart = this.productService.getProductFromCart();
    this.calculteAllTotal(this.productAddedToCart); //total actual
  }

}
