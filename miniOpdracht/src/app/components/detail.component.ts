import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  providers: [PostsService]
})

export class DetailComponent {
  persons: Person[];

  constructor(private  postsService: PostsService) {
    this.persons = this.postsService.getPosts();
  }
}

interface Person {
  id: number
  first_name: string
  last_name: string
  age: number
  gender: string
}
