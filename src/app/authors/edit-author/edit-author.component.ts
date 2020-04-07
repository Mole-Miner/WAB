import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  @Input() author: Author;

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.author = this.authorService.getEditAuthor();
  }

  validateForm() {
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

    this.updateAuthorLastname(this.author.lastname);
    this.updateAuthorFirstname(this.author.firstname);
    this.updateAuthorPatronymic(this.author.patronymic);
    this.updateAuthorBirthday(this.author.birthday);
    this.router.navigateByUrl('/authors');
  }

  updateAuthorLastname(value: string) {
    this.authorService
      .updateAuthor(this.author.key, { lastname: value })
      .catch(err => console.log(err));
  }

  updateAuthorFirstname(value: string) {
    this.authorService
      .updateAuthor(this.author.key, { firstname: value })
      .catch(err => console.log(err));
  }

  updateAuthorPatronymic(value: string) {
    this.authorService
      .updateAuthor(this.author.key, { patronymic: value })
      .catch(err => console.log(err));
  }

  updateAuthorBirthday(value: Date) {
    this.authorService
      .updateAuthor(this.author.key, { birthday: value })
      .catch(err => console.log(err));
  }

  // updateAuthorLastname(value: string) {
  //   this.authorService
  //     .updateAuthorLastname(this.author.key, { lastname: value })
  //     .catch(err => console.log(err));
  // }

  // updateAuthorFirstname(value: string) {
  //   this.authorService
  //     .updateAuthorFirstname(this.author.key, { firstname: value })
  //     .catch(err => console.log(err));
  // }

  // updateAuthorPatronymic(value: string) {
  //   this.authorService
  //     .updateAuthorLastname(this.author.key, { patronymic: value })
  //     .catch(err => console.log(err));
  // }

  // updateAuthorBirthday(value: Date) {
  //   this.authorService
  //     .updateAuthorLastname(this.author.key, { birthday: value })
  //     .catch(err => console.log(err));
  // }

  goBack() {
    this.router.navigateByUrl('/authors');
  }
}
