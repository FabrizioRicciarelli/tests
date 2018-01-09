// ===================
// ****  IMPORTS  ****
// ===================
// Angular & friends
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormControl } from '@angular/forms/src/model';

// User-defined
import { ToDoModel, TodoItem, Book, Framework, Img } from './models/model-base';
import { BOOKS, IMGS, FWKS } from './models/model-data';
import { BookStoreService } from './services/book-store.service';


// =====================
// ****  COMPONENT  ****
// =====================
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['bootstrap.css', './app.component.css'],
  providers: [BookStoreService]
})
export class AppComponent implements OnInit {
  // ---------------------
  // ****  VARIABLES  ****
  // ---------------------
  // external arrays, array of classes (from model-data)
  public booksList: Book[] = BOOKS;
  // public imgs: Img[] = IMGS;
  public frameworks: Framework[] = FWKS;

  // external classes (from model-base)
  selectedBook: Book;
  selectedIncapsuledBook: Book;
  public todoModel: ToDoModel;
  bookTitle = 'Elenco Libri';

  // ngModel/updatable elements
  public selectedcar = 'Ferrari';
  public message: string;
  public messageAlert: string;

  // Attribute properties
  public colSpanValue = 4;
  public imgWidth = 50;
  public imgHeight = 50;
  public altText = 'Logo image';

  // Various elements
  public title: string;

  // Form elements
  @ViewChild('todoText') el: ElementRef;


  // -------------------
  // ****  METHODS  ****
  // -------------------
  constructor(
    private bookStoreService: BookStoreService
  ) {
    this.title = 'tests';
    this.messageAlert = '';
    this.fillToDoModel();
  }

  ngOnInit(): void {
    this.getBooksList();
  }

  fillToDoModel() {
    this.todoModel = new ToDoModel();
    this.todoModel.user = 'Angular';
    this.todoModel.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collect Tickets', false),
      new TodoItem('Call Joe', false)
    ];
  }

  getName() {
    return this.todoModel.user;
  }

  getTodoItems() {
    return this.todoModel.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.todoModel.items.push(new TodoItem(newItem, false));
      this.el.nativeElement.value = '';
    }
  }

  getInlineStyles(framework) {
    const styles = { 'color': framework === 'Angular' ? 'red' : 'green', 'text-decoration': framework === 'Angular' ? 'underline' : 'none' };
    return styles;
  }

  getClasses(framework) {
    const classes = { red: framework === 'Angular', bolder: framework === 'Angular' };
    return classes;
  }

  getImgUrl(framework) {
    return this.frameworks.filter(f => f.name === framework)[0].logoUrl;
  }

  getProductClasses(availability: number | null): string {
    return (availability === null || this.booksList.length >= availability) ? 'bg-success' : 'bg-warning';
  }

  showMessage(event) {
    if (event.key === 'Enter') {
      const contents = event.target.value;
      alert((contents.length === 0) ? 'Non hai digitato nulla ed hai premuto Enter' : event.target.value + '[Enter]');
    }
    this.message = event.target.value;
  }

  showAlert(event) {
    alert(event.key);
  }
  
  // FROM service
  getBooksList() {
    this.booksList = this.bookStoreService.getBooks();
  }
  getServiceBookDetails(isbn: number) {
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }
  deleteServiceBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }

  // FROM local model-data
  getBook(isbn: number) {
    // const consoleMsg = `First book: ${this.booksList[0].title}`;
    // console.info(consoleMsg);
    return this.booksList.filter(b => b.isbn === isbn)[0];
  }

  getBookDetails(isbn: number) {
    this.selectedBook = this.booksList.filter(book => book.isbn === isbn)[0];
  }

  getIncapsuledBookDetails(isbn: number) {
    this.selectedIncapsuledBook = this.booksList.filter(book => book.isbn === isbn)[0];
  }

  deleteBook(isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    if (isbn === this.selectedBook.isbn) {
      this.selectedBook = null;
    }
    this.selectedIncapsuledBook = null;
    return this.booksList;
  }
}

