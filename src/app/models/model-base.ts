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
/*  
    // An alternative way on how fill the object
    constructor() {
        this.user = 'Angular';
        this.items = [
            new TodoItem('Buy Flowers', false),
            new TodoItem('Get Shoes', false),
            new TodoItem('Collect Tickets', false),
            new TodoItem('Call Joe', false)
        ];
    }
 */
}
