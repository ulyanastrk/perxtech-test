import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './providers/books.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    BooksService
  ],
})

export class CoreModule {
}
