import {Component} from '@angular/core';
import  {PostsService} from '../../services/posts.service';
import {Person} from './Person';

@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  providers: [PostsService]
})

export class DetailComponent {
  persons: Person[];
  selectedPerson: Person;

  constructor(private  postsService: PostsService) {
    this.persons = this.postsService.getPosts();
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
