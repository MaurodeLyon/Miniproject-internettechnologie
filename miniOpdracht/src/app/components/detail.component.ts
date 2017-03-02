import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  providers: [PostsService]
})

export class DetailComponent {
  persons: Person[];
  name: string;

  constructor(private  postsService: PostsService) {
    this.persons = this.postsService.getPosts();
    this.name = 'TestName';
  }
}

interface Person {
  id: number
  first_name: string
  last_name: string
  age: number
  gender: string
}
