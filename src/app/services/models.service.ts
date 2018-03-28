import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TodoItem, Framework, Book, MDSLmin } from '../models/model-base';
import { Observable } from 'rxjs/Observable';

// Per qualche motivo, al momento ignoto, tre classi di servizio configurate come riportato di seguito non funzionano,
// imponendo pertanto la creazione di tre files distinti, ciascuno contenente la propria classe di servizio.

@Injectable()
export class TodoService {
    constructor(private api: ApiService) {
    }
    addTodo(todo: TodoItem): Observable<TodoItem> { return this.api.createTodo(todo); }
    deleteTodoById(id: number): Observable<TodoItem> { return this.api.deleteTodoById(id); }
    updateTodo(todo: TodoItem): Observable<TodoItem> { return this.api.updateTodo(todo); }
    getAllTodos(): Observable<TodoItem[]> { return this.api.getAllTodos(); }
    getTodoById(id: number): Observable<TodoItem> { return this.api.getTodoById(id); }
    complete() { }
}

@Injectable()
export class FrameworkService {
    constructor(private api: ApiService) { }
    addFramework(framework: Framework): Observable<Framework> { return this.api.createFramework(framework); }
    deleteFrameworkByName(name: string): Observable<Framework> { return this.api.deleteFrameworkByName(name); }
    updateFramework(framework: Framework): Observable<Framework> { return this.api.updateFramework(framework); }
    getAllFrameworks(): Observable<Framework[]> { return this.api.getAllFrameworks(); }
    getFrameworkByName(name: string): Observable<Framework> { return this.api.getFrameworkByName(name); }
    complete() { }
}

@Injectable()
export class BookService {
    constructor(private api: ApiService) { }
    addBook(book: Book): Observable<Book> { return this.api.createBook(book); }
    deleteBookByISBN(isbn: number): Observable<Book> { return this.api.deleteBookByISBN(isbn); }
    updateBook(book: Book): Observable<Book> { return this.api.updateBook(book); }
    getAllBooks(): Observable<Book[]> { return this.api.getAllBooks(); }
    getBookByISBN(isbn: number): Observable<Book> { return this.api.getBookByISBN(isbn); }
    complete() { }
}

@Injectable()
export class MDSLminService {
    constructor(private api: ApiService) { }
    getAllMDSLmins(): Observable<MDSLmin> { return this.api.getAllMDSLmin(); }
    complete() { }
}
