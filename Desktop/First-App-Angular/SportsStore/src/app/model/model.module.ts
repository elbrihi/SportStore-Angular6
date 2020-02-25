import { NgModule } from "@angular/core";
import {ProductRepository}  from  './product.repository';
import {StaticDataSource}  from  './static.data.source';
import {Order} from './order.model';
import {Cart} from './cart.model';
import {OrderRepository} from './order.repository';
import {RestDataSource} from './rest.datasource';
import { HttpClientModule } from "@angular/common/http";
import {AuthService} from "./auth.service";
import { ConnectionService } from "./connection.service";


@NgModule({
    imports: [HttpClientModule],
    providers:[ProductRepository,StaticDataSource,Cart,Order,OrderRepository,
            {provide: StaticDataSource, useClass: RestDataSource},RestDataSource,AuthService
                 ,ConnectionService        ]
})

export class ModelModel
{
    constructor(state:StaticDataSource)
    {
        console.log();
    }
}