import { Component } from '@angular/core';
import {Cart} from '../model/cart.model';
import {Order} from '../model/order.model';

@Component({
    selector: 'cart-summary',
    templateUrl: "cartSummary.component.html",// selector store.component
    
  })
export class CartSummaryComponent
{
  constructor(public cart: Cart)
  {
    
  }
  
}