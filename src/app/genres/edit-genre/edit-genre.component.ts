import { Component, OnInit, Injectable, Input } from '@angular/core';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';
import { Genre } from '../genre';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class EditGenreComponent implements OnInit {

  @Input() genre: Genre;

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit() {
    this.genre = this.genreService.getEditGenre();
  }

  validateForm(): void {
    let name = document.forms['genreForm']['name'];
    if (name.value == '') {
      alert('Введите название жанра');
      return;
    }

    this.updateGenre(this.genre.name);
    this.router.navigateByUrl('/genres');
  }

  updateGenre(value: string) {
    this.genreService
      .updateGenre(this.genre.key, { name: value })
      .catch(err => console.log(err));
  }

  goBack() {
    this.router.navigateByUrl('/genres');
  }
}
