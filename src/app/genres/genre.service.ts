import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Genre } from './genre';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private dbPath = 'genres';

  genreForEdit: Genre;

  genresRef: AngularFireList<Genre> = null;

  constructor(private db: AngularFireDatabase) {
    this.genresRef = db.list(this.dbPath);
  }

  getPath(): string {
    return this.dbPath;
  }

  createGenre(genre: Genre): void {
    this.genresRef.push(genre);
  }

  updateGenre(key: string, value: any): Promise<void> {
    return this.genresRef.update(key, value);
  }

  deleteGenre(key: string): Promise<void> {
    return this.genresRef.remove(key);
  }

  // pickGenreName(name: string): Promise<void> {
  //   // return this.genresRef = this.db.list(this.dbPath).query.orderByValue().equalTo(name);
  //   return this.genresRef = this.db.list(this.dbPath, ref => ref.orderByValue().equalTo(name)).snapshotChanges().pipe(map(
  //     changes => changes.map()
  //   ))

  //   // this.genresRef = this.db.list(this.dbPath, ref => ref.orderByChild('name').equalTo(name));
  //   // console.log('pick');
  //   // return this.genresRef = this.db.list(this.dbPath, ref => ref.orderByChild('name').equalTo(name));
  // }


  // getGenreName(value: string): void {
  //   this.genresRef = this.db.list(this.dbPath, ref => ref.orderByChild('name').equalTo(value));
  //   console.log('got name');
  // }

  getGenresList(): AngularFireList<Genre> {
    return this.genresRef;
  }

  setEditGenre(genre: Genre): void {
    this.genreForEdit = genre;
  }

  getEditGenre(): Genre {
    return this.genreForEdit;
  }

}
