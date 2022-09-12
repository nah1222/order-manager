import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../model/Item';
import { Cart } from '../model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private cartObject = new BehaviorSubject<Array<any>>([]);
  cart = this.cartObject.asObservable();
  
  baseUrl = 'localhost:4200/'

  constructor(private http:HttpClient) { }
  
  getOrderById(id: string): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + id)
  }

  addOrder(order:any): Observable<Item> {
    return this.http.post<Item>(this.baseUrl + "orders", order);
  }

}