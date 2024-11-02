import { inject,Injectable } from '@angular/core';
import { Author } from '../model/author';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";


const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private http: HttpClient = inject(HttpClient);
  public getAuthor(id:String): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }

  public addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(Url + 'authors', author)
  }
  constructor() { }
}
