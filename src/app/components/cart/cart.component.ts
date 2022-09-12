import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { Cart } from 'src/app/model/Cart';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Item[] = [];
  paid: boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(res => {this.cart = res;})
  }

  calcTotalPrice(){
    return this.cart.map(item => item.price).reduce((a, b) => a + b, 0);
  }

  newCart(){
    this.cart = [];
  }

  onPayNow(){
    this.paid = !this.paid;
    console.log(this.paid);
  }

}
