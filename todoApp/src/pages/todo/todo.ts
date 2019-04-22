import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import todos from '../../data/todos';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage implements OnInit {
  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  ngOnInit(){
    this.todo= Object.assign({}, this.getTodo(this.navParams.get('id')));
  }

  getTodo(todoId){
    for(let todo of todos){
      if(todo.id == todoId){
        return todo;
      }
    }
  }
  
  // todo 수정
  updateTodo(){
    todos[this.todo.id -1] = this.todo;
    this.navCtrl.popToRoot();
  }

}
