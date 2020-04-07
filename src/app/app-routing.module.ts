import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { CreateAuthorComponent } from './authors/create-author/create-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: GenresListComponent},
  {path: 'creategenre', component: CreateGenreComponent},
  {path: 'editgenre', component: EditGenreComponent},
  {path: 'authors', component: AuthorsListComponent},
  {path: 'createauthor', component: CreateAuthorComponent},
  {path: 'editauthor', component: EditAuthorComponent},
  {path: 'books', component: BooksListComponent},
  {path: 'createbook', component: CreateBookComponent},
  {path: 'editbook', component: EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
