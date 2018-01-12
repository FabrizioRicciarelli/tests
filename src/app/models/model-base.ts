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
