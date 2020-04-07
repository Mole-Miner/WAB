import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenreInfoComponent } from './genres/genre-info/genre-info.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { CreateAuthorComponent } from './authors/create-author/create-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { AuthorInfoComponent } from './authors/author-info/author-info.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { BookInfoComponent } from './books/book-info/book-info.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { GenresFilterPipe } from './genres/genre.filter';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenreInfoComponent,
    GenresListComponent,
    CreateGenreComponent,
    EditGenreComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
    AuthorInfoComponent,
    AuthorsListComponent,
    BookInfoComponent,
    BooksListComponent,
    CreateBookComponent,
    EditBookComponent,
    GenresFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
