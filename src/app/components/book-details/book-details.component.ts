import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/model-base';
@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['../../app.component.css']
})
export class BookDetailsComponent {
  // Si può attribuire anche un alis all'@Input, una cosa del tipo @Input('myBook') book: Book; e, nel chiamante (padre), 
  // fare riferimento all'alias in questo modo: <book-details [mybook]></book-details>
  @Input() book: Book;

  // Preparazione dell'evento che sarà scatenato dalla pressione del pulsante presente nel template figlio
  // Il tipo <number> è stato scelto poiché, in questo caso, passiamo un valore numerico alla funzione: a seconda
  // dei casi sceglieremo il tipo appropriato
  @Output() onDelete = new EventEmitter<number>();
  
  // funzione presente nel padre, richiamata dal figlio
  deleteBook () {
    this.onDelete.emit(this.book.isbn);
  }
}
