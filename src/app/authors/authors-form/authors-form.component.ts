import { Component, OnInit } from '@angular/core';

import { Author } from '../../models/author';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
  styleUrls: ['./authors-form.component.css']
})
export class AuthorsFormComponent implements OnInit {

  authors: Author[] = [];
  selectedAuthor: Author = null;
  
  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getAuthors()
  }

  getAuthors() {
    this.authorsService.getAuthors()
      .subscribe((data) => this.authors = data);
  }

  onAuthorSelect(author: Author) {
    this.selectedAuthor = author;
  }

  onAuthorAdd(authorName: string, article: any, text: any) {
    this.authorsService.addAuthor(authorName, article, text)
      .subscribe(() => this.getAuthors());
  }

  onAuthorUpdate(author: Author) {
    this.authorsService.updateAuthor(author)
      .subscribe(() => this.getAuthors());

    this.selectedAuthor = null;
  }

  onAuthorDelete(author: Author) {
    this.authorsService.deleteAuthor(author.id)
      .subscribe(() => this.getAuthors());

    this.selectedAuthor = null;
  }

}
