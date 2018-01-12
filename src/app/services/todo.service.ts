import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TodoItem } from '../models/model-base';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TodoService {
    constructor(private api: ApiService) {
    }
    addTodo(todo: TodoItem): Observable<TodoItem> { return this.api.createTodo(todo); }
    complete() {  /* this.items.map(x=>x.id) */ }
    deleteTodoById(id: number): Observable<TodoItem> { return this.api.deleteTodoById(id); }
    updateTodo(todo: TodoItem): Observable<TodoItem> { return this.api.updateTodo(todo); }
    getAllTodos(): Observable<TodoItem[]> { return this.api.getAllTodos(); }
    getTodoById(id: number): Observable<TodoItem> { return this.api.getTodoById(id); }
}

