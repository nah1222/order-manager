import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Item } from "../model/Item";
import {ITEMS} from '../mock-items'
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5000/';

  constructor(private http:HttpClient) { }
  private itemSource = new BehaviorSubject <Array<any>>([]);
  cart = this.itemSource.asObservable();

  changeOrder(newOrder: any){
    this.itemSource.next(newOrder);
  }

}
