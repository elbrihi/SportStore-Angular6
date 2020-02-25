import { Injectable } from "@angular/core";
import {Order} from "./order.model";
import { Observable } from "rxjs";
import {StaticDataSource} from './static.data.source';
import {RestDataSource} from "./rest.datasource";


@Injectable()

export class OrderRepository {

  private orders:Order[]=[];
  private loaded: boolean = false;


  constructor(private datasource:RestDataSource)
  {
    //console.log(this.datasource.getOrders());
  }

  saveOrder(order: Order): Observable<Order>
  {
   
    return this.datasource.saveOrder(order);
  }
  getOrders(): Order[]
  {
    if (!this.loaded) {
      this.loadOrders();
     }

      //this.loadOrders();
      return this.orders;
    
  }
  loadOrders()
  {
    this.loaded = true;
    return this.datasource.getOrders().subscribe(orders => this.orders = orders);
  }

  
 
  
  
}