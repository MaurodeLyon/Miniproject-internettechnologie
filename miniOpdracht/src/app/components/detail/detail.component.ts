import {Component} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Person} from '../Person';

@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styles:[`.modal {
  text-align: center;
}

@media screen and (min-width: 768px) { 
  .modal:before {
    display: inline-block;
    vertical-align: middle;
    content: " ";
    height: 100%;
  }
}

.modal-dialog {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}`],
  providers: [PostsService]
})

export class DetailComponent {
  persons: Person[];
  selectedPerson: Person;
  newPerson: Person;

  constructor(private postsService: PostsService) {
    this.persons = this.postsService.getPersons();
    this.newPerson = new Person();
  }

  addPerson(): void {
    this.newPerson.id = this.persons.length + 1;
    this.persons.push(this.newPerson);
    this.newPerson = new Person();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  removePerson(person: Person): void {
    var index = this.persons.indexOf(person, 0);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}
