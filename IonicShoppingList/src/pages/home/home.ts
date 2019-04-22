import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Item } from '../../model/item/item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingList$: Observable<Item[]>;
  constructor(public navCtrl: NavController) {
    
  }

}
