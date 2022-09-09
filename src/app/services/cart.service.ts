import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../model/Item';
import { Cart } from '../model/Cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5000/cart';
  @Input() item!: Item;
  @Input() cart!: Cart;
  
  order = this.cart.order

  constructor(private http:HttpClient) { }
  
  addToCart(item: Item){
    
    this.order.push(item);
  }

  deleteCartItem(){}

  calculateTotal(){}

  submitOrder(){}

}
