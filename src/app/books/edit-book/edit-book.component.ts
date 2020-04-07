import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { GenreService } from 'src/app/genres/genre.service';
import { AuthorService } from 'src/app/authors/author.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  @Input() book: Book;

  genres: any;
  authors: any;

  constructor(private bookService: BookService,  private genreService: GenreService, private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.getGenresList();
    this.getAuthorsList();
    this.book = this.bookService.getEditBook();
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

    this.updateBookTitle(this.book.title);
    this.updateBookPages(this.book.pages.toString());
    this.updateBookGenre(this.book.genre);
    this.updateBookAuthor(this.book.author);
    this.router.navigateByUrl('/books');
  }

  updateBookTitle(value: string) {
    this.bookService
      .updateBook(this.book.key, { title: value })
      .catch(err => console.log(err));
  }

  updateBookPages(value: string) {
    this.bookService
      .updateBook(this.book.key, { pages: value })
      .catch(err => console.log(err));
  }

  updateBookGenre(value: string) {
    this.bookService
      .updateBook(this.book.key, { genre: value })
      .catch(err => console.log(err));
  }

  updateBookAuthor(value: string) {
    this.bookService
      .updateBook(this.book.key, { author: value })
      .catch(err => console.log(err));
  }

  goBack() {
    this.router.navigateByUrl('/books');
  }
}
