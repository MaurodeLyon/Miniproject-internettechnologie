import {Component, Input} from '@angular/core';
import  {PostsService} from '../services/posts.service';

@Component({
  selector: 'currentEnergyConsumption',
  templateUrl: 'currentConsumption.component.html',
  providers: [PostsService]

})
export class CurrentConsumptionComponent {
  previousTime: number[];
  currentTime: number[];

  constructor(private postsService: PostsService) {
    this.postsService.getMauroDelta().subscribe(posts => {
      this.previousTime = posts[0].time.split("T")[1].split(".")[0].split(":");
      this.currentTime = posts[0].now.split("T")[1].split(".")[0].split(":");
    });
  }
}
