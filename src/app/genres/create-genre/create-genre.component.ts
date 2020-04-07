import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent implements OnInit {

  genre: Genre = new Genre();
  submitted = false;

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit() {
  }

  // newGenre(): void {
  //   this.submitted = false;
  //   this.genre = new Genre();
  // }

  // save() {
  //   this.genreService.createGenre(this.genre);
  //   this.genre = new Genre();
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  // }



  validateForm(): void {
    let name = document.forms['genreForm']['name'];
    if (name.value == '') {
      alert('Введите название жанра');
      return;
    }

    this.genreService.createGenre(this.genre);
    this.genre = new Genre();
    this.router.navigateByUrl('/genres');
  }

  goBack() {
    this.router.navigateByUrl('/genres');
  }

}
