import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { TodoItem } from '../Models/model-base';

const API_URL = environment.apiUrl;
@Injectable()

export class ApiService {
  constructor(
    private http: Http
  ) { }

  // API: GET /todos
  public getAllTodos(): Observable<TodoItem[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new TodoItem(todo, false));
      });
  }
  // API: POST /todos
  public createTodo(todo: TodoItem): any {
    // userà this.http.post()
    return this.http
      .post(API_URL + '/todos', todo // )
      // .then((response: Response) => {
      //   const ResponseStatus: string = response.statusText + ' - ' + response.json();
      //   return ResponseStatus;
      // }
      );
  }
  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<TodoItem> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new TodoItem(todo, false));
      });
  }
  // API: PUT /todos/:id
  public updateTodo(todo: TodoItem): any {
    return this.http
      .put(API_URL + '/todos', todo // )
      // userà this.http.put()
      );
  }
  // DELETE /todos/:id
  public deleteTodoById(todoId: number): any {
    // userà this.http.delete()
    return this.http
      .delete(API_URL + '/todos/' + todoId);
  }
}
