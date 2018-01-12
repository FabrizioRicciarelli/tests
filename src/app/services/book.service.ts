import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Book } from '../models/model-base';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BookService {
    constructor(private api: ApiService) { }
    addBook(book: Book): Observable<Book> { return this.api.createBook(book); }
    deleteBookByISBN(isbn: number): Observable<Book> { return this.api.deleteBookByISBN(isbn); }
    updateBook(book: Book): Observable<Book> { return this.api.updateBook(book); }
    getAllBooks(): Observable<Book[]> { return this.api.getAllBooks(); }
    getBookByISBN(isbn: number): Observable<Book> { return this.api.getBookByISBN(isbn); }
    complete() { /* this.items.map(x=>x.id) */ }
}

