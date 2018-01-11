import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { TodoItem, Framework } from '../models/model-base';

const API_URL = environment.apiUrl;
@Injectable()

export class ApiService {
  constructor(
    private http: Http
  ) { }

  public getTodoById(todoId: number): Observable<TodoItem> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new TodoItem(todo.id, todo.title, false));
      });
  }

  public getFrameworkByName(frameworkName: string): Observable<Framework> {
    return this.http
      .get(API_URL + '/frameworks/?name=' + frameworkName)
      .map(response => {
        const frameworks = response.json();
        return frameworks.map((framework) => new Framework(framework.name, framework.releaseYear, framework.logoUrl, framework.description));
      });
  }
  
  public getAllTodos(): Observable<TodoItem[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        console.info('getAllTodos() error: ' + response);
        const todos = response.json();
        return todos.map((todo) => new TodoItem(todo.id, todo.title, todo.complete));
      })
      .catch(this._todoErrorHandler);
  }
  _todoErrorHandler(error: Response) {
    console.info('getAllTodos() error: ' + error);
    return Observable.throw(error || 'Server Error');
  }

  public getAllFrameworks(): Observable<Framework[]> {
    return this.http
      .get(API_URL + '/frameworks')
      .map(response => {
        console.info('getAllFrameworks() error: ' + response);
        const fws = response.json();
        return fws.map((fw) => new Framework(fw.name, fw.releaseYear, fw.logoUrl, fw.description));
      })
      .catch(this._todoErrorHandler);
  }
  _frameworkErrorHandler(error: Response) {
    console.info('getAllFrameworks() error: ' + error);
    return Observable.throw(error || 'Server Error');
  }

  public createTodo(todo: TodoItem): any { return this.http.post(API_URL + '/todos', todo); }
  public createFramework(framework: Framework): any { return this.http.post(API_URL + '/frameworks', framework); }
  public updateTodo(todo: TodoItem): any { return this.http.put(API_URL + '/todos', todo); }
  public updateFramework(framework: Framework): any { return this.http.put(API_URL + '/frameworks', framework); }
  public deleteTodoById(todoId: number): any { return this.http.delete(API_URL + '/todos/' + todoId); }
  public deleteFrameworkByName(frameworkName: string): any { return this.http.delete(API_URL + '/frameworks/?name=' + frameworkName); }
}
