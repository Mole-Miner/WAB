import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-info',
  templateUrl: './genre-info.component.html',
  styleUrls: ['./genre-info.component.scss']
})
export class GenreInfoComponent implements OnInit {

  @Input() genre: Genre;

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit() {
  }

  openEditGenre() {
    this.genreService.setEditGenre(this.genre);
    this.router.navigateByUrl('/editgenre');
  }

  deleteGenre() {
    this.genreService
      .deleteGenre(this.genre.key)
      .catch(err => console.log(err));
  }

}
