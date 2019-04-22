import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import todos from '../../data/todos';
import { TodoPage } from '../todo/todo'
import { NewTodoPage } from '../new-todo/new-todo'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  todos: {
    id: number,
    title: string,
    description : string,
    complete : boolean
  }[];

  //생성자의 파라미터가 있어야 사용할 수 있음
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit(){
    this.todos = todos;
  }

  // todo 상세
  showTodo(todoId){
    //Angular의 라우터를 사용하지 않고 스택구조로 push ,pop 형태
    this.navCtrl.push(TodoPage, {id: todoId});
  }

  // 새 todor
  openNewTodo(){
    //객체 메모리상에 생성
    let modal = this.modalCtrl.create(NewTodoPage);
    //화면에 보이기
    modal.present();
  }

  // todo 삭제
  deleteTodo(todoId){
    todos.splice(todoId-1, 1);
  }
}
