import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// todo
import { Model, TodoItem } from './models/model';
import { Book } from './models/book';
import { BOOKS } from './models/mock-book';
import { NgSwitch } from '@angular/common';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['bootstrap.css', './app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;  
  public frameworks: string[] = ['Angular', 'React', 'Ember'];
  public imgs = [
    { name: 'Angular', url: 'assets/img/angularLogo.png' },
    { name: 'React', url: 'assets/img/reactLogo.png' },
    { name: 'Ember', url: 'assets/img/emberLogo.jpg' }
  ];
  public model: Model;
  public booksList: Book[] = BOOKS;
  @ViewChild('todoText') el: ElementRef;
  public selectedcar = 'Ferrari';
  public message: string;
  public colSpanValue = 3;
  
  constructor() {
    this.title = 'tests';
    this.model = new Model();
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
  showMessage(msg) {
    this.message = msg.target.value;
  }
  getProductClasses(availability: number | null): string {
    return (availability === null || this.booksList.length >= availability) ? 'bg-success' : 'bg-warning';
  }
  getBook(isbn: number) {
    const consoleMsg = `First book: ${this.booksList[0].title}`;
    console.info(consoleMsg);
    return this.booksList.filter(b => b.isbn === isbn)[0];
  }  
}

