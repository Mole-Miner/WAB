import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { Author } from '../author';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  author: Author = new Author();

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  validateForm(): void {
    let lastname = document.forms['authorForm']['lastname'];
    let firstname = document.forms['authorForm']['firstname'];
    let patronymic = document.forms['authorForm']['patronymic'];
    let birthday = document.forms['authorForm']['birthday'];

    if (lastname.value == '') {
      alert('Введите фамилию');
      return;
    } else if (firstname.value == '') {
      alert('Введите имя');
      return;
    } else if (birthday.value == '') {
      alert('Введите дату');
      return;
    }

    this.authorService.createAuthor(this.author);
    this.author = new Author();
    this.router.navigateByUrl('/authors');
  }

  goBack() {
    this.router.navigateByUrl('/authors');
  }
}
