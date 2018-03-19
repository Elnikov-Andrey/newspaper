import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Author } from '../../models/author';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {

  author: Author;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');

        return this.authorsService.getAuthor(id)
          
      })
      .subscribe((data) => this.author = data);
  }

}
