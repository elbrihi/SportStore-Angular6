import { Injectable } from "@angular/core";
import {Product} from  './product.model';
import { createAttribute } from "@angular/compiler/src/core";

@Injectable()
export class Cart
{
   public lines: CartLine[] = []
   public itemCount =  0;
   public cartPrice =0;
   /*public addLine(product: Product)
   {
      
      this.lines.push(new CartLine(product,this.quantity));
      return this.lines.map((cartLine,i,array) => cartLine.product )
      .map((product,i,array)=>product.price).reduce((acc,val) => acc +val);
   }*/
   public removeLine(id: number)
   {
     this.lines ;
     let result = this.lines.filter(val => !(val.product.id===id));
     this.lines = result;
     console.log(this.lines)
     this.recalculate();
   }
   
   public addLine(product: Product,quantity: number = 1)
   {
     
      this.lines.push(new CartLine(product,quantity));
       this.recalculate();
       return  this;  
   }
   private recalculate()
   {
      this.cartPrice =0;
      this.itemCount =0;
      return this.lines.forEach(p => {
         
         this.itemCount += p.quantity;
         
         this.cartPrice += p.product.price*p.quantity;
         //console.log(p)
        
      });
   }
   
   



}

export class CartLine
{
   constructor(
      public product: Product,
      public quantity: number,  
   )
   {

   }
}

 