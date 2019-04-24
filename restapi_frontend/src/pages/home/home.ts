import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: Observable<any>;
  constructor(public navCtrl: NavController, public todoService: TodoServiceProvider, public alertCtrl: AlertController, public toastCtrl: ToastController){
    this.loadTodos();
  }

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(){
    let prompt = this.alertCtrl.create({
      title: 'Add todo',
      message: '새로운 할일을 입력하세요.',
      inputs: [
        {
          name: 'text',
          placeholder: '할일'
        }
      ],
      buttons:[{
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.todoService.addTodo(data.text).subscribe(res => {
            this.showToast('저장 완료')
            this.loadTodos();
          })
        }
      }
      ]
    });
    prompt.present();
  }

  private showToast(message: string){
    let toast = this.toastCtrl.create({
      message,
      duration: 3000
    })
    toast.present()
  }

  removeTodo(id){
    this.todoService.deleteTodo(id).subscribe(res => {
      this.showToast('삭제완료')
      this.loadTodos();
    })
  }

  

  



}
