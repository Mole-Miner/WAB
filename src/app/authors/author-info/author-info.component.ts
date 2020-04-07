import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { Author } from '../author';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit {

  @Input() author: Author;

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  openEditAuthor() {
    this.authorService.setEditAuthor(this.author);
    this.router.navigateByUrl('/editauthor');
  }

  deleteAuthor() {
    this.authorService
      .deleteAuthor(this.author.key)
      .catch(err => console.log(err));
  }
}
