import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GenresFilterPipe } from '../genre.filter';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss']
})
export class GenresListComponent implements OnInit {

  genres: any;

  //name: string;

  genreToFind: string;

  constructor(private genreService: GenreService, private genresFilter: GenresFilterPipe, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getGenresList();
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

  setFilter() {
    // this.genreService.getGenreName(this.genreToFind);
    // this.getGenresList();
  }
}
