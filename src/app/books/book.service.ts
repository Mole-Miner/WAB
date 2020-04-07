import { Injectable } from '@angular/core';
import { Book } from './books';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dbPath = '/books';

  bookForEdit: Book;

  booksRef: AngularFireList<Book> = null;

  constructor(private db: AngularFireDatabase) {
    this.booksRef = db.list(this.dbPath);
   }

  createBook(book: Book): void {
    this.booksRef.push(book);
  }

  // updateBookTitle(key: string, value: any): Promise<void> {
  //   return this.booksRef.update(key, value);
  // }

  // updateBookPages(key: string, value: any): Promise<void> {
  //   return this.booksRef.update(key, value);
  // }

  // updateBookGenre(key: string, value: any): Promise<void> {
  //   return this.booksRef.update(key, value);
  // }

  // updateBookAuthor(key: string, value: any): Promise<void> {
  //   return this.booksRef.update(key, value);
  // }

  updateBook(key: string, value: any): Promise<void> {
    return this.booksRef.update(key, value);
  }

  deleteBook(key: string): Promise<void> {
    return this.booksRef.remove(key);
  }

  getBooksList(): AngularFireList<Book> {
    return this.booksRef;
  }

  setEditBook(book: Book): void {
    this.bookForEdit = book;
  }

  getEditBook(): Book {
    return this.bookForEdit;
  }
}
