import {Injectable } from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthComponent} from './auth.component';
import {AdminComponent} from './admin.component';
import {AuthGuard} from "./auth.guard";
import {ProductTableComponent} from "./productTable.component";
import {ProductEditorComponent} from "./ProductEditorComponent";
import {OrderComponent} from "./orderComponent";


let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children:[
        {path: "products", component: ProductTableComponent},
        {path: "products/:mode", component: ProductEditorComponent},
        {path: "products/:mode/:id", component: ProductEditorComponent},
        {path: "orders", component: OrderComponent},
    ]
    },
    { path: "**", redirectTo: "auth" }
]);
@NgModule({
    imports: [CommonModule,FormsModule,routing],
    providers: [AuthGuard],
    declarations:[AuthComponent,AdminComponent,ProductTableComponent,ProductEditorComponent,OrderComponent]
})


export class AdmineModule
{
    constructor()
    {
        console.log(OrderComponent);
    }
}