import { Component } from '@angular/core';

// todo
import { Model, TodoItem } from './models/model';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['bootstrap.css', './app.component.css']
})
export class AppComponent {
  title = 'tests';
  public frameworks: string[] = ['Angular', 'React', 'Ember'];
  public selectedcar = 'Ferrari';
  public message: string;
  public imgs = [
    { name: 'Angular', url: 'assets/img/angularLogo.png' },
    { name: 'React', url: 'assets/img/reactLogo.png' },
    { name: 'Ember', url: 'assets/img/emberLogo.jpg' }
  ];
  // todo
  model = new Model();
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
}

