import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Author } from './models/author';
import { AUTHORS } from './authors-mock';

@Injectable()
export class AuthorsService {

  authors: Author[] = AUTHORS;

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(this.authors);
  }

  getAuthor(id: number): Observable<Author>{
    return of(this.authors.find((c) => c.id === id ));
  }

  addAuthor(name: string, article: any, text: any): Observable<Author> {
    const id = Date.now();
    const newAuthor = {
      id,
      name,
      article,
      text
    };

    console.log('adding contact', name)

    this.authors = [...this.authors, newAuthor];

    return of(newAuthor);
  }

  getArticles(): Observable<Author[]> {
    return of(this.authors);
  }
  getArticle(id: number): Observable<Author>{
    return of(this.authors.find((c) => c.id === id ));
  }
  // getAuthor(id: number): Observable<Author>{
  //   return of(this.authors.find((c) => c.id === id ));
  // }

  updateAuthor(author: Author) {
    this.authors = this.authors.map(c => c.id === author.id ? author : c);

    return of(author);
  }

  deleteAuthor(authorId: number) {
    console.log('deleting contact', authorId)
    this.authors = this.authors.filter(c => c.id !== authorId);

    return of(null);
  }
}
