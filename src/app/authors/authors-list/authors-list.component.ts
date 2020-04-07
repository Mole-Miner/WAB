import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  authors: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthorsList();
  }

  getAuthorsList() {
    this.authorService.getAuthorsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(authors => {
      this.authors = authors;
    });
  }

}
