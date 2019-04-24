import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'
import { Item } from '../../model/item/item.model'


//의존성주입
//자바에서 DAO와 Service가 합쳐진 개념

@Injectable()
export class ShoppingListService {
    private shoppingListRef = this.db.list<Item>('shopping-list')

    constructor(private db: AngularFireDatabase){ }

    getShoppingList(){
        return this.shoppingListRef
    }

    addItem(item: Item){
        return this.shoppingListRef.push(item) // insert
    }

    updateItem(item: Item){
        return this.shoppingListRef.update(item.key, item) // update
    }

    removeItem(item: Item){
        return this.shoppingListRef.remove(item.key) // delete
    }
}