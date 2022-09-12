import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cart!: Item[];

  ngOnInit(): void {
    this.cartService.cart.subscribe( res => {
      this.cart = res;
    })
  }

}
