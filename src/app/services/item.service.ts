import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Item } from "../model/Item";
import {ITEMS} from '../mock-items'
import { Observable, of } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items';

  constructor(private http:HttpClient, private cartService: CartService) { }


  getItems(): Observable <Item[]>{
    return this.http.get<Item[]>(this.apiUrl);
  }

  deleteItem(item: Item): Observable<Item>{
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<Item>(url)
  }
}
