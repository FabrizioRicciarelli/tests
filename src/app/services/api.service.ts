import { Injectable/* , Inject */ } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { TodoItem, Framework, Book, MDSLmin } from '../models/model-base';

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
  
  public getBookByISBN(isbn: number): Observable<Book> {
    return this.http
      .get(API_URL + '/books/' + isbn)
      .map(response => {
        const books = response.json();
        return books.map((book) => new Book(book.isbn, book.title, book.authors, book.published, book.description, book.coverImage));
      });
  }

  // public getBigTreeByName(bigtreeName: string): Observable<BigTree> {
  //   return this.http
  //     .get(API_URL + '/bigtrees/?name=' + bigtreeName)
  //     .map(response => {
  //       const bigtrees = response.json();
  //       return bigtrees.map((bigtree) => new BigTree(bigtree));
  //     });
  // }
  
  public getAllTodos(): Observable<TodoItem[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        console.info('getAllTodos() response: ' + response);
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
        console.info('getAllFrameworks() response: ' + response);
        const fws = response.json();
        return fws.map((fw) => new Framework(fw.name, fw.releaseYear, fw.logoUrl, fw.description));
      })
      .catch(this._frameworkErrorHandler);
  }
  _frameworkErrorHandler(error: Response) {
    console.info('getAllFrameworks() error: ' + error);
    return Observable.throw(error || 'Server Error');
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http
      .get(API_URL + '/books')
      .map(response => {
        console.info('getAllBooks() response: ' + response);
        const bks = response.json();
        return bks.map((book) => new Book(book.isbn, book.title, book.authors, book.published, book.description, book.coverImage));
      })
      .catch(this._bookErrorHandler);
  }
  _bookErrorHandler(error: Response) {
    console.info('getAllBooks() error: ' + error);
    return Observable.throw(error || 'Server Error');
  }

  public getAllMDSLmin(): Observable<MDSLmin> {
    return this.http
      .get(API_URL + '/mdslmin')
      .map(response => {
        console.info('getAllMDSLmin() response: ' + response);
        const mdslmins = response.json();
        return mdslmins;
      })
      .catch(this._mdslminErrorHandler);
  }
  _mdslminErrorHandler(error: Response) {
    console.info('getAllMDSLmin() error: ' + error);
    return Observable.throw(error || 'Server Error');
  }

  public createTodo(todo: TodoItem): any { return this.http.post(API_URL + '/todos', todo); }
  public createFramework(framework: Framework): any { return this.http.post(API_URL + '/frameworks', framework); }
  public createBook(book: Book): any { return this.http.post(API_URL + '/books', book); }
  
  public updateTodo(todo: TodoItem): any { return this.http.put(API_URL + '/todos', todo); }
  public updateFramework(framework: Framework): any { return this.http.put(API_URL + '/frameworks', framework); }
  public updateBook(book: Book): any { return this.http.put(API_URL + '/books', book); }
  
  public deleteTodoById(todoId: number): any { return this.http.delete(API_URL + '/todos/' + todoId); }
  public deleteFrameworkByName(frameworkName: string): any { return this.http.delete(API_URL + '/frameworks/?name=' + frameworkName); }
  public deleteBookByISBN(isbn: number): any { return this.http.delete(API_URL + '/books/' + isbn); }
}
