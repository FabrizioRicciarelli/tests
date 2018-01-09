export class Book {
    isbn: number | null;
    title: string;
    authors: string;
    published: string;
    description: string;
    coverImage: string;
}
export class Img {
    name: string;
    url: string;
}
export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
export class ToDoModel {
    user;
    items;
}
