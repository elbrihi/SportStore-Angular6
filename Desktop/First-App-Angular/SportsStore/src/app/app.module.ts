import { Injectable } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { AdmineModule } from "./admin/admin.module";

//    @Injectable()

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,StoreModule,RouterModule.forRoot([
      { path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]

      },
      { path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]

      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdmineModule",
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" 
      },
      
  ])

  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(store:StoreModule)
  {
    console.log(store); 
  }
}
