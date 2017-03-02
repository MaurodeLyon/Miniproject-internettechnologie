import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'home',
  template: `<h1>Home page</h1>
            <div *ngFor="let post of posts">
              <h3>{{post.title}}</h3>
              <p>{{post.body }}</p>
            </div>
            `,
  providers: [PostsService]
})

export class HomeComponent {
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
