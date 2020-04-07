import { Component, OnInit, Injectable } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../books';
import { AuthorService } from 'src/app/authors/author.service';
import { GenreService } from 'src/app/genres/genre.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})

export class CreateBookComponent implements OnInit {

  book: Book = new Book();

  genres: any;
  authors: any;

  constructor(private bookService: BookService, private genreService: GenreService, private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.getGenresList();
    this.getAuthorsList();
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

  validateForm(): void {
    let title = document.forms['bookForm']['title'];
    let pages = document.forms['bookForm']['pages'];
    let genre = document.forms['bookForm']['genre'];
    let author = document.forms['bookForm']['author'];

    if (title.value == '') {
      alert('Введите название');
      return;
    } else if (pages.value == '') {
      alert('Введите количество страниц');
      return;
    } else if (genre.value == '') {
      alert('Выберите жанр');
      return;
    } else if (author.value == '') {
      alert('Выберите автора');
      return;
    }

    this.bookService.createBook(this.book);
    //this.authorService.addBookForAuthor(this.book);
    this.book = new Book();
    this.router.navigateByUrl('/books');
  }

  goBack() {
    this.router.navigateByUrl('/books');
  }
}
