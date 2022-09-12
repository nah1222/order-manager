import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/Item';
import {Cart} from '../../model/Cart'
import { CARTS, ITEMS } from "../../mock-items";
import { ItemService } from '../../services/item.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = ITEMS

  cart: Item[] = []
  

  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(res => {
      this.cart = res;
    });
  }

  areAllUnchecked = (item: any) => item['selected'] === false;

  onSubmit(form: any){
    if(this.items.every(this.areAllUnchecked)){
      alert("Select at least 1 product.");
      return;
    }
    for(let item of this.items){
      if(item.selected){
        this.cart.push(item);
      }
    }
    this.cartService.changeOrder(this.cart);
    console.log(this.cart);

    this.itemService.addOrder(JSON.stringify(this.cart))
      .subscribe(item => this.cart.push(item));
  }

}
