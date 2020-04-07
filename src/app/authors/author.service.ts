import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Author } from './author';
import { Book } from '../books/books';
import { CreateBookComponent } from '../books/create-book/create-book.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private dbPath = '/authors';

  authorForEdit: Author;
  bookForAdd: Book;

  authorsRef: AngularFireList<Author> = null;

  constructor(private db: AngularFireDatabase) {
    this.authorsRef = db.list(this.dbPath);
   }

  createAuthor(author: Author): void {
    this.authorsRef.push(author);
  }

  addBookForAuthor(book: Book): Promise<void> {
    this.bookForAdd = book;
    console.log(book);
    // let booklist = this.db.list(this.dbPath, ref => ref.orderByKey().equalTo(book.key));
    // console.log(booklist);
    //booklist.push(value);
    return
  }

  updateAuthor(key: string, value: any): Promise<void> {
    return this.authorsRef.update(key, value);
  }

  deleteAuthor(key: string): Promise<void> {
    return this.authorsRef.remove(key);
  }

  getAuthorsList(): AngularFireList<Author> {
    return this.authorsRef;
  }

  setEditAuthor(author: Author): void {
    this.authorForEdit = author;
  }

  getEditAuthor(): Author {
    return this.authorForEdit;
  }

  // makeMerge(authorLastname: string): void {
  //   this.authorsRef = this.db.li
  // }
}
