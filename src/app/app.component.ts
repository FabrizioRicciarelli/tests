// ===================
// ****  IMPORTS  ****
// ===================
// Angular & friends
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { FormControl } from '@angular/forms/src/model';

// User-defined
import { ToDoModel, TodoItem, Framework, Book } from './models/model-base';
import { TodoService } from './services/todo.service';
import { FrameworkService } from './services/framework.service';
import { BookService } from './services/book.service';
// import { TodoService, FrameworkService, BookService } from './services/models.service';
import { ApiService } from './services/api.service';


// =====================
// ****  COMPONENT  ****
// =====================
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['bootstrap.css', './app.component.css'],
  providers: [TodoService, FrameworkService, BookService]
})
export class AppComponent implements OnInit {
  // ---------------------
  // ****  VARIABLES  ****
  // ---------------------
  // external arrays, array of classes (from model-data)
  // public imgs: Img[] = IMGS; /* OLD mock-up data, now data comes from REST WebAPI service */
  public frameworks: Framework[]; // = FWKS; /* OLD mock-up data, now data comes from REST WebAPI service */
  public booksList: Book[]; // = BOOKS; /* OLD mock-up data, now data comes from REST WebAPI service */

  // external classes (from model-base)
  todoModel: ToDoModel;
  selectedBook: Book;
  selectedIncapsuledBook: Book;
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
    private todoService: TodoService,
    private frameworkService: FrameworkService,
    private bookService: BookService
  ) {
    this.title = 'tests';
    this.messageAlert = '';
    this.fillModelArraysFromAPIServices();
  }

  ngOnInit(): void {
    this.getBooksList();
  }

  fillModelArraysFromAPIServices() {
    // Popolamento todoModel con dati ritornati dalle WebAPI
    this.todoModel = new ToDoModel();
    this.todoModel.items = this.todoService.getAllTodos().subscribe(items => this.todoModel.items = items);
    // Analogo alla riga precedente, ma per un maggior controllo sulla singola riga/colonna di dati
    // const subscription = this.todoService.getAllTodos().subscribe(
    //   items => {
    //     if (items != null && items !== undefined) {
    //       items.forEach(obj => {
    //         this.todoModel.items.push({ id: obj.id, title: obj.title, complete: obj.complete });
    //       });
    //     }
    //   });

    // Popolamento Frameworks con dati ritornati dalle WebAPI
    // (per il momento, quella che segue è l'unica via che conosco per valorizzare l'oggetto frameworks)
    this.frameworks = new Array<Framework>();
    const subscription = this.frameworkService.getAllFrameworks().subscribe(
      frameworks => {
        if (frameworks != null && frameworks !== undefined) {
          frameworks.forEach(obj => {
            this.frameworks.push({ name: obj.name, releaseYear: obj.releaseYear, logoUrl: obj.logoUrl, description: obj.description });
          });
        }
      });

    this.booksList = new Array<Book>();
    const subscriptionBook = this.bookService.getAllBooks().subscribe(
      books => {
        if (books != null && books !== undefined) {
          books.forEach(obj => {
            this.booksList.push({ isbn: obj.isbn, title: obj.title, authors: obj.authors, published: obj.published, description: obj.description, coverImage: obj.coverImage });
          });
        }
      });

    // Inizializzazione todoModel con dati mockup locali
    // this.todoModel = new ToDoModel();
    // this.todoModel.user = 'Angular';
    // this.todoModel.items = [
    //   new TodoItem('Buy Flowers', false),
    //   new TodoItem('Get Shoes', false),
    //   new TodoItem('Collect Tickets', false),
    //   new TodoItem('Call Joe', false)
    // ];
  }

  getName() {
    return this.todoModel.user;
  }

  getTodoItems() {
    if (this.todoModel != null && this.todoModel.items != null && this.todoModel.items.length > 0) {
      return this.todoModel.items.filter(item => !item.complete);
    }
  }

  addTodoItem(newItem) {
    if (newItem !== '') {
      this.todoModel.items.push(new TodoItem(newItem.id, newItem.description, false));
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
    return this.booksList;
  }
  // deleteServiceBook(isbn: number) {
  //   this.selectedBook = null;
  //   this.booksList = this.bookService.deleteBookByISBN(isbn);
  // }

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
    if (this.selectedBook != null && this.selectedBook.isbn === isbn) {
      this.selectedBook = null;
    }
    if (this.selectedIncapsuledBook != null && this.selectedIncapsuledBook.isbn === isbn) {
      this.selectedIncapsuledBook = null;
    }
    return this.booksList;
  }
}

