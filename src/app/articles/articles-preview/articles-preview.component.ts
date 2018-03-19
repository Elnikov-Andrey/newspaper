import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Author } from '../../models/author';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-articles-preview',
  templateUrl: './articles-preview.component.html',
  styleUrls: ['./articles-preview.component.css']
})
export class ArticlesPreviewComponent implements OnInit {

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

  onChangeArticleBtnClick(){
    alert('change')
  }
}
