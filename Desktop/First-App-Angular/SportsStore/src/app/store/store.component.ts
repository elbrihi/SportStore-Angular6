
import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";



@Component({
    selector: "store",
    templateUrl: "store.component.html",

})

export class StoreComponent
{
    public selectedCategory = null;
    public pro ;
    private price =0;
    constructor(private repo: ProductRepository,private cart: Cart,private router: Router)
    {
      
    }

    get product()
    {
        return this.repo.getProducts(this.selectedCategory);
    }

    get categories()
    {
        return this.repo.getCategories();
    }

   
    get products(): Product[] {
        return this.repo.getProducts(this.selectedCategory);
    }
  
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        
    } 
    addProductToCart(product: Product,quantity: number)
    {
        this.cart.addLine(product,quantity) ;
        this.router.navigateByUrl("/cart");
    }
    get priceProduct()
    {
        return this.price;
    }
   
    
    
}