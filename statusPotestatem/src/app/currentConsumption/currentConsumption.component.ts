import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {PieChart} from "../charts/PieChart";
import {data} from "../services/Data";

@Component({
  selector: 'currentEnergyConsumption',
  templateUrl: 'currentConsumption.component.html',
  providers: [PostsService]

})
export class CurrentConsumptionComponent {
  mauroPieChart: UsagePieChart;
  mauroPreviousTime: number;
  mauroCurrentTime: number;
  mauroDeltaTime: number;
  mauroCurrentUsage: number;

  arthurPieChart: UsagePieChart;
  arthurPreviousTime: number;
  arthurCurrentTime: number;
  arthurDeltaTime: number;
  arthurCurrentUsage: number;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroDelta().subscribe(posts => {
      this.mauroPieChart = new UsagePieChart();
      let prevTimeArr = posts[0].current_tick.split("T")[1].split(".")[0].split(":");
      let currTimeArr = posts[0].previous_tick.split("T")[1].split(".")[0].split(":");

      this.mauroPreviousTime = +(prevTimeArr[0] * 60 * 60) + +(prevTimeArr[1] * 60) + +(prevTimeArr[2]);
      this.mauroCurrentTime = +(currTimeArr[0] * 60 * 60) + +(currTimeArr[1] * 60) + +(currTimeArr[2]);

      this.mauroDeltaTime = this.mauroPreviousTime - this.mauroCurrentTime;
      this.mauroCurrentUsage = Math.floor(3600 / this.mauroDeltaTime);

      let scale = 3600 - +this.mauroCurrentUsage;
      this.mauroPieChart.pieChartData = [this.mauroCurrentUsage, scale];
    });

    this.postsService.getArthurDelta().subscribe(posts => {
      this.arthurPieChart = new UsagePieChart();
      let prevTimeArr = posts[0].current_tick.split("T")[1].split(".")[0].split(":");
      let currTimeArr = posts[0].previous_tick.split("T")[1].split(".")[0].split(":");

      this.arthurPreviousTime = +(prevTimeArr[0] * 60 * 60) + +(prevTimeArr[1] * 60) + +(prevTimeArr[2]);
      this.arthurCurrentTime = +(currTimeArr[0] * 60 * 60) + +(currTimeArr[1] * 60) + +(currTimeArr[2]);

      this.arthurDeltaTime = this.arthurPreviousTime - this.arthurCurrentTime;
      this.arthurCurrentUsage = Math.floor(3600 / this.arthurDeltaTime);

      let scale = 3600 - +this.arthurCurrentUsage;
      this.arthurPieChart.pieChartData = [this.arthurCurrentUsage, scale];
    });
  }
}

class UsagePieChart implements PieChart {
  pieChartLabels: string[] = ["Usage", ""];
  pieChartData: number[];
  pieChartType: string = 'pie';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }

}
