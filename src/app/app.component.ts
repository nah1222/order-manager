import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Item } from './model/Item';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-order-manager';

  constructor(private cartService: CartService){}

  cart: Item[] = [];

  ngOnInit(){
    this.cartService.cart.subscribe(res => {
      this.cart = res;
    })
  }
}
