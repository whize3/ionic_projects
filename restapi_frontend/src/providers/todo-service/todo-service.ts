import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettingsProvider } from '../app-settings/app-settings'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoServiceProvider {

  apiUrl = this.appSettings.getApiUrl()

  constructor(public http: HttpClient, public appSettings: AppSettingsProvider) {
    console.log('Hello TodoServiceProvider Provider');
  
  }

  public getTodos() 
  { 
    return this.http.get(this.apiUrl + 'todos')
  }

  public addTodo(newTodo){
    return this.http.post(this.apiUrl+'todos', {'text':newTodo})
  }

  public deleteTodo(todoID){
    return this.http.delete(this.apiUrl + 'todos/' + todoID);
  }

}
