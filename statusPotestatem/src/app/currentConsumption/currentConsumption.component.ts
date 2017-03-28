import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {PieChart} from "../charts/PieChart";

@Component({
  selector: 'currentEnergyConsumption',
  templateUrl: 'currentConsumption.component.html',
  providers: [PostsService]

})
export class CurrentConsumptionComponent {
  previousTime: number;
  currentTime: number;
  deltaTime: number;
  currentUsage: number;
  MauroPieChart: MauroPieChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroDelta().subscribe(posts => {
      let prevTimeArr = posts[0].current_tick.split("T")[1].split(".")[0].split(":");
      let currTimeArr = posts[0].previous_tick.split("T")[1].split(".")[0].split(":");

      this.previousTime = +(prevTimeArr[0] * 60 * 60) + +(prevTimeArr[1] * 60) + +(prevTimeArr[2]);
      this.currentTime = +(currTimeArr[0] * 60 * 60) + +(currTimeArr[1] * 60) + +(currTimeArr[2]);

      this.deltaTime = this.previousTime - this.currentTime;
      this.currentUsage = 3600 / this.deltaTime;
      this.MauroPieChart = new MauroPieChart();
      let scale = 3600 - +this.currentUsage;
      this.MauroPieChart.pieChartData = [this.currentUsage,scale];
    });
  }
}

class MauroPieChart implements PieChart {
  pieChartLabels: string[] = ["Usage",""];
  pieChartData: number[];
  pieChartType: string = 'pie';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }

}
