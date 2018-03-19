import { Component, OnInit } from '@angular/core';

import { Author } from '../../models/author';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorsService.getAuthors()
      .subscribe((data) => this.authors = data);
  }

}
