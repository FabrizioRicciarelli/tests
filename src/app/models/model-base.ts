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

// ng-treetable -----------------------------
export class MDSLmin {
    data: Master[];
    constructor(instanceData?: MDSLmin) {
        if (instanceData) {
          this.deserialize(instanceData);
        }
    }
    deserialize(instanceData: MDSLmin) {
        const keys = Object.keys(this);
    
        for (const key of keys) {
          if (instanceData.hasOwnProperty(key)) {
            this[key] = instanceData[key];
          }
        }
    }        
}

export interface Master {
    data: MasterData;
    children: Detail[];
}

export interface MasterData {
    requestId: string;
    requestDesc: string;
}

export interface Detail {
    data: DetailData;
    children: Session[];
}

export interface DetailData {
    requestDetailId: string;
    requestId: string;
    ticket: string;
}

export interface Session {
    data: SessionData;
    children: Delta[];
}

export interface SessionData {
    requestDetailId: string;
    SessionID: string;
    SessionParentID: string;
    Level: string;
    StartTicketCode: string;
    UnivocalLocationCode: string;
    MachineID: string;
    GD: string;
    AamsMachineCode: string;
}

export interface Delta {
    data: DeltaData[];
}

export interface DeltaData {
    requestDetailId: string;
    UnivocalLocationCode: string;
    MachineID: string;
    GD: string;
    AamsMachineCode: string;
    SessionID: string;
    TicketCode: string;
}
// ------------------------ end ng-treetable

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
