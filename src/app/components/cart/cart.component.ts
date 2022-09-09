import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { Cart } from 'src/app/model/Cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() item!: Item;
  @Input() cart!: Cart;

  order = this.cart.order
  total = this.cart.totalPrice


  constructor() { }

  ngOnInit(): void {
    this.order.forEach(item => {
      this.total += (this.item.quantity * this.item.price)
    })
  }

}
