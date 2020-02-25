import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { store } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app',
  //template: "<store></store>",// selector store.component
  template: "<router-outlet></router-outlet>"

  
})
export class AppComponent {

}
