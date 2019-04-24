import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { Item } from '../../model/item/item.model';
import { Observable } from 'rxjs/Observable';
import { ShoppingListService} from '../../services/shopping-list/shopping-list.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //내부 변수라서 $를 붙임(관행)
  shoppingList$: Observable<Item[]>;
  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    //snashotChanges 상태 변경이 있을 떄
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    })
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad Homepage')
  }

}
