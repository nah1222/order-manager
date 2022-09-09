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
  carts: Cart[] = CARTS

  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => this.items = items);
  }

  deleteItem(item: Item){
    this.itemService.deleteItem(item).subscribe(() => 
    (this.items = this.items.filter(i => i.id !== item.id)));
  }

  addItemToCart(item:Item){
    this.cartService.addToCart(item).subscribe((items) => this.item = console.log(item))
  }

}
