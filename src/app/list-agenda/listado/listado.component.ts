import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  productList: Product[] = []
  title: String="";

  constructor(private productService: ProductService,
    private msg: MessageService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts(); //catalogo
    this.title = "Productos SAC";
  }

  sendToCart(product: Product){
    console.log("Enviando "+ product.description);
    this.msg.sendMsg(product);  //enviando producto a los observadores
  }

}
