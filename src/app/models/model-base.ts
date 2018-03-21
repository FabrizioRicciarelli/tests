export class Book {
    isbn: number | null;
    title: string;
    authors: string;
    published: string;
    description: string;
    coverImage: string;
    constructor(isbn, title, authors, published, description, coverImage) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.description = description;
        this.coverImage = coverImage;
    }
}
export class Framework {
    name: string;
    releaseYear: number;
    logoUrl: string;
    description: string;
    constructor(name, releaseYear, logoUrl, description) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.logoUrl = logoUrl;
        this.description = description;
    }
}

/* export interface Child {
    name: string;
    size?: number;
}

export interface Child {
    name: string;
    size?: number;
    children: Child[];
}

export interface Child {
    name: string;
    children: Child[];
    size?: number;
}

export interface Child {
    name: string;
    children: Child[];
}

export interface MainBigTree {
    name: string;
    children: Child[];
} */

interface RootObject {
    name: string;
    children: Child4[];
  }
  
  interface Child4 {
    name: string;
    children: Child3[];
  }
  
  interface Child3 {
    name: string;
    children?: Child2[];
    size?: number;
  }
  
  interface Child2 {
    name: string;
    size?: number;
    children?: Child[];
  }
  
  interface Child {
    name: string;
    size: number;
  }

export class BigTree {
    name: string;
    // bigtrees: MainBigTree[];
    children: Child4[];
    constructor(instanceData?: BigTree) {
        if (instanceData) {
          this.deserialize(instanceData);
        }
    } 

    deserialize(instanceData: BigTree) {
    const keys = Object.keys(this);

    for (const key of keys) {
      if (instanceData.hasOwnProperty(key)) {
        this[key] = instanceData[key];
      }
    }
  }
}
export class Img {
    name: string;
    url: string;
}
export class TodoItem {
    id;
    title;
    complete;
    constructor(id, title, complete) {
        this.id = id;
        this.title = title;
        this.complete = complete;
    }
}
export class ToDoModel {
    user;
    items;
    lastId = 0;
    constructor() {
        this.user = 'Angular';
        this.items = [];
        //     new TodoItem('Buy Flowers', false),
        //     new TodoItem('Get Shoes', false),
        //     new TodoItem('Collect Tickets', false),
        //     new TodoItem('Call Joe', false)
        // ];
    }
    // Simulate POST /todos
    addTodo(todo: TodoItem): ToDoModel {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.items.push(todo);
        return this;
    }
    complete() {
        // this.items.map(x=>x.id)
    }
    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): ToDoModel {
        this.items = this.items
            .filter(todo => todo.id !== id);
        return this;
    }
    // Simulate PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): TodoItem {
        const todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }
    // Simulate GET /todos
    getAllTodos(): TodoItem[] {
        return this.items;
    }
    // Simulate GET /todos/:id
    getTodoById(id: number): TodoItem {
        return this.items
            .filter(todo => todo.id === id)
            .pop();
    }
}
