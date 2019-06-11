import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book.model';
import {map} from 'rxjs/operators';
import {BooksConfig} from '../models/config.model';
import {HttpConfig} from '../../helpers/httpConfig';

@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<BooksConfig>(`${HttpConfig.API_URL}`)
      .pipe(
        map(
          (config) => config.data.map((c) => new Book(c))
        )
      );
  }
}
