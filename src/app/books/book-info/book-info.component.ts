import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  @Input() book: Book;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  openEditBook() {
    this.bookService.setEditBook(this.book);
    this.router.navigateByUrl('/editbook');
  }

  deleteBook() {
    this.bookService
      .deleteBook(this.book.key)
      .catch(err => console.log(err));
  }
}
