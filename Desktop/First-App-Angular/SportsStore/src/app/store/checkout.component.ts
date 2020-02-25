import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})

export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;
    constructor( public order: Order,public repository:OrderRepository) {}

    submitOrder(form: NgForm)
    {
        console.log(this.order);
        this.submitted = true;
       // this.repository.saveOrder(this.order);
        //console.log(this.repository.saveOrder(this.order))
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                //this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        
        }
    }
}