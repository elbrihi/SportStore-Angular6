import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import {OrderRepository} from "../model/order.repository";


@Component({
    templateUrl : "orderComponent.html",
})


export class OrderComponent 
{  
    constructor(private  orderRepository:OrderRepository)
    {
      //console.log(orderRepository.getOrders());
    }

    getOrders()
    {
      
      console.log(this.orderRepository.getOrders());
      return this.orderRepository.getOrders();

    }
}