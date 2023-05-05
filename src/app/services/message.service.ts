import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject()

  constructor() { }

  sendMsg(product:Product) {
    this.subject.next(product) //Triggering an event, asíncrona
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
