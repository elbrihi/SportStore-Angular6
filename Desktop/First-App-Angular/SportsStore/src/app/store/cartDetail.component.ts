import { Component } from "@angular/core";

import {Cart} from "../model/cart.model";

import { ConnectionService } from "../model/connection.service";

@Component({
    templateUrl:'cartDetail.component.html',
})
export class CartDetailComponent
{
    public connected: boolean = true;
    constructor(private cart: Cart, private connection: ConnectionService)
    {
        
        console.log(cart);
    }
    get removeLine()
    {
        return this.cart
    }
    
} 