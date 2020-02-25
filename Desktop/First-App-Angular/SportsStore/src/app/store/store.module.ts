import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreComponent} from '../store/store.component';
import {ModelModel } from "../model/model.module";
import { FormsModule } from "@angular/forms";

import {CartSummaryComponent} from './cartSummary.component';
import {CheckoutComponent} from './checkout.component';
import {CartDetailComponent} from './cartDetail.component'; 
import { RouterModule } from "@angular/router";



@NgModule({
    imports: [ModelModel, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent,CartSummaryComponent,CartDetailComponent,CheckoutComponent],

    exports: [StoreComponent,CartDetailComponent,CheckoutComponent]

})

/*@NgModule({
    imports: [BrowserModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})*/


export class StoreModule 
{ 
    consotructor()
    {
        console.log('Store Model');
    }
}