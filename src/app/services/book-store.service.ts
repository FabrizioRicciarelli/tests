import { Injectable } from '@angular/core';
import { Book } from '../models/model-base';
import { BOOKS } from '../models/model-data';

@Injectable() export class BookStoreService {
    booksList: Book[] = BOOKS;
    
    getBooks() { 
        return this.booksList; 
    }
    getBook(isbn: number) {
        return this.booksList.filter(book => book.isbn === isbn)[0];
    }
    deleteBook(isbn: number) {
        this.booksList = this.booksList.filter(book => book.isbn !== isbn);
        return this.booksList;
    }
}
