export class Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;

  constructor(id=0, name='', description = '', quantity=1, price = 0) {
    this.id = id
    this.name = name
    this.description = description
    this.quantity = quantity
    this.price = price
  }
}
