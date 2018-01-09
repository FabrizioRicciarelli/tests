import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TodoItem } from '../models/model-base';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TodoService {
    constructor(private api: ApiService) {
    }
    // Simulate POST /todos
    addTodo(todo: TodoItem): Observable<TodoItem> {
        return this.api.createTodo(todo);
    }
    complete() {
    // this.items.map(x=>x.id)
    }
    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): Observable<TodoItem> {
        return this.api.deleteTodoById(id);
    }
    // Simulate PUT /todos/:id
    updateTodo(todo: TodoItem): Observable<TodoItem> {
        return this.api.updateTodo(todo);
    }
    // Simulate GET /todos
    getAllTodos(): Observable<TodoItem[]> {
            return this.api.getAllTodos();
    }
    // Simulate GET /todos/:id
    getTodoById(id: number): Observable<TodoItem> {
        return this.api.getTodoById(id);
    }
}
