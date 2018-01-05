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
  geClasses(framework) {
    const classes = { red: framework = 'Angular', bolder: framework = 'Angular' };
    return classes;
  }
}

