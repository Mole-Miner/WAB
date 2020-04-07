import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Genre } from './genre';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database/database';
import { GenreService } from './genre.service';

@Pipe({
  name: 'genresFilter'
})
@Injectable({providedIn: 'root'})
export class GenresFilterPipe implements PipeTransform {

  //private genres: AngularFireList<Genre>
  // private db: AngularFireDatabase;
  //| genresFilter:searchGenre

  constructor(private genreService: GenreService) {
    //this.genres = genreService.getGenresList();
  }

  transform(genres:  AngularFireList<Genre>, searchGenre: string = ''):  AngularFireList<Genre>{
    if (!searchGenre.trim()) {
      return genres;
    }

    // console.log(this.genreService.myQuery(searchGenre));
    // this.genres = (this.genreService.queryOneValue(searchGenre));
    // console.log(this.genres);
    // return genres.filter(genre => {
    //   return genre.name.toLowerCase().indexOf(searchGenre.toLowerCase()) !== -1;
    // })
    //return genres;
  }

}
