import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authors/author.service';
import { BookService } from '../books/book.service';
import { GenreService } from '../genres/genre.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  authors: any;
  books: any;
  genres: any;

  genreToFind: string;

  constructor(private authorService: AuthorService, private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getAuthorsList();
    this.getBooksList();
    this.getGenresList();
  }

  setAuthorFilter() {
    console.log('Фильтр авторов сработал');
  }

  setBookFilter() {
    console.log('Фильтр книг сработал');
  }

  setGenreFilter() {
    console.log('Фильтр жанров сработал');
    //this.genreService.pickGenreName(this.genreToFind);
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

  getGenresList() {
    this.genreService.getGenresList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(genres => {
      this.genres = genres;
    });
  }
}
