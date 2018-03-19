import { Component, OnInit } from '@angular/core';

import { Author } from '../../models/author';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.authorsService.getArticles()
      .subscribe((data) => this.authors = data);
  }

}
