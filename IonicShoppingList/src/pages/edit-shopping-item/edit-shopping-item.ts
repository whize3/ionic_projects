import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../model/item/item.model'
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service'
import { ToastService } from '../../services/toast/toast.service'

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewWillLoad(){
    console.log('ionViewWillLoad EditShoppingItemPage');
    this.item = this.navParams.get('item')
  }

  updateItem(item: Item){
    this.shopping.updateItem(item).then(() => {
      this.toast.show(`${item.name} saved!`)
      this.navCtrl.setRoot('HomePage')
    })
  }

  removeItem(item: Item){
    this.shopping.removeItem(item).then(()=>{
      this.toast.show(`${item.name} deleted`)
      this.navCtrl.setRoot('HomePage')
    })
  }


}
