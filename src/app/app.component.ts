import { Component, OnInit } from '@angular/core';

// todo
import { Model, TodoItem } from './models/model';
import { Book } from './models/book';
import { BOOKS } from './models/mock-book';
import { NgSwitch } from '@angular/common';

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
/*   public BOOKS: Book[] = [
    {
      isbn: 9781786462084,
      title: 'Laravel 5.x Cookbook',
      authors: 'Alfred Nutile',
      published: 'September 2016',
      description: 'A recipe-based book to help you efficiently create amazing PHP-based applications with Laravel 5.x',
      coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05517_MockupCover_Cookbook_0.jpg'
    },
    {
      isbn: 9781784396527,
      title: 'Sitecore Cookbook for Developers',
      authors: 'Yogesh Patel',
      published: 'April 2016',
      description: 'Over 70 incredibly effective and practical recipes to get you up and running with Sitecore development',
      coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/6527cov_.jpg'
    },
    {
      isbn: 9781783286935,
      title: 'Sass and Compass Designers Cookbook',
      authors: 'Bass Jobsen',
      published: 'April 2016',
      description: 'Over 120 practical and easy-to-understand recipes that explain how to use Sass and Compass to write efficient, maintainable, and reusable CSS code for your web development projects',
      coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/I6935.jpg'
    }
  ];
 */  
  public model: Model;
  public booksList: Book[];

  public selectedcar = 'Ferrari';
  public message: string;
  public colSpanValue = 3;
  
  constructor() {
    this.title = 'tests';
    this.model = new Model();
    this.booksList = new Array<Book>();
  }

  ngOnInit(): void {
    this.booksList = BOOKS;
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
  getBook(isbn: number) {
    const consoleMsg = `First book: ${this.booksList[0].title}`;
    console.info(consoleMsg);
    return this.booksList.filter(b => b.isbn === isbn)[0];
  }  
}

