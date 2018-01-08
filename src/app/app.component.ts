import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// todo
import { ToDoModel, TodoItem, Book, Img } from './models/model-base';
import { BOOKS, IMGS, FWKS } from './models/model-data';
import { NgSwitch } from '@angular/common';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['bootstrap.css', './app.component.css']
})
export class AppComponent implements OnInit {
  public title: string; 
  
  // external arrays, classes, array of classes (from model-data)
  public frameworks: string[] = FWKS;
  public model: ToDoModel;
  public booksList: Book[] = BOOKS;
  public imgs: Img[] = IMGS;
  selectedBook: Book;
  bookTitle = 'Elenco Libri';
  
  @ViewChild('todoText') el: ElementRef;
  public selectedcar = 'Ferrari';
  public message: string;
  public messageAlert: string;
  
  public colSpanValue = 3;
  public imgWidth = 50;
  public imgHeight = 50;
  public altText = 'Logo image';

  constructor() {
    this.title = 'tests';
    this.model = new ToDoModel();
    this.messageAlert = '';
  }

  ngOnInit(): void {
  }

  // todo
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem) {
    if (newItem !== '') {
      this.model.items.push(new TodoItem(newItem, false));
      this.el.nativeElement.value = '';
    }
  }
  getInlineStyles(framework) {
    const styles = { 'color': framework === 'Angular' ? 'red' : 'green', 'text-decoration': framework === 'Angular' ? 'underline' : 'none'};
    return styles;
  }
  getClasses(framework) {
    const classes = { red: framework === 'Angular', bolder: framework === 'Angular' };
    return classes;
  }
  getImgUrl(framework) {
    return this.imgs.filter(f => f.name === framework)[0].url;
  }

  getProductClasses(availability: number | null): string {
    return (availability === null || this.booksList.length >= availability) ? 'bg-success' : 'bg-warning';
  }
  getBook(isbn: number) {
    const consoleMsg = `First book: ${this.booksList[0].title}`;
    console.info(consoleMsg);
    return this.booksList.filter(b => b.isbn === isbn)[0];
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
  getBookDetails (isbn: number) {
    const selectedBook = this.booksList.filter(book => book.isbn === isbn);
    this.selectedBook = selectedBook[0];
  }  
}

