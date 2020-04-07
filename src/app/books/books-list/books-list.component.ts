import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.bookService.getBooksList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(books => {
      this.books = books;
    });
  }

}
