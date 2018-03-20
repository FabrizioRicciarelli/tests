import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TreeTableModule} from 'ng-treetable';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeTableModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
