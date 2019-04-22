import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import todos from '../../data/todos';

@IonicPage()
@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
})
export class NewTodoPage {
  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  } = {
    id: todos[todos.length-1].id +1,
    title: '',
    description: '',
    complete: false
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTodoPage');
  }

  saveTodo(){
    if(this.todo.title == '' ||  this.todo.description == ''){
      let alert = this.alertCtrl.create({
        title: '알림',
        subTitle: '제목과 내용을 꼭 입력해주세요.',
        buttons: ['승인']
      });
      alert.present();
    }else{
      todos.push(this.todo);
      this.viewCtrl.dismiss();
    }
  }

  //취소
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
