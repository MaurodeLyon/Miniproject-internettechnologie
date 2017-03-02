import {Component, Input} from '@angular/core';
import {Person} from './Person';

@Component({
  selector: 'person-detail',
  templateUrl: 'person.component.html'
})

export class PersonComponent {
  @Input()
  person: Person;
}
