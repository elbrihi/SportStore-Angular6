import {Component} from "@angular/core";
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";



@Component({
    templateUrl: "productTable.component.html"

})
export class ProductTableComponent
{
    constructor(private productRepository:ProductRepository)
    {
        //console.log(this.productRepository.getProducts());
    }
    
    getProducts():Product[]
    {
        
        return this.productRepository.getProducts();
    }
    deleteProduct(id)
    {
        console.log(this.productRepository.deleteProduct(id));
    }
}