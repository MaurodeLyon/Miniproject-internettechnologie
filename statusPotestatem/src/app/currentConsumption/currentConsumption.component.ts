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
  previousTime: number;
  currentTime: number;
  deltaTime: number;
  currentUsage: number;
  mauroPieChart: UsagePieChart;
  arthurPieChart: UsagePieChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroDelta().subscribe(posts => {
      this.mauroPieChart = new UsagePieChart();
      this.setupUsageChart(posts,this.mauroPieChart);

    });
    this.postsService.getArthurDelta().subscribe(posts => {
      this.arthurPieChart = new UsagePieChart();
      this.setupUsageChart(posts,this.arthurPieChart);

    });
  }
  private setupUsageChart(posts:data,chart:UsagePieChart)
  {
    let prevTimeArr = posts[0].current_tick.split("T")[1].split(".")[0].split(":");
    let currTimeArr = posts[0].previous_tick.split("T")[1].split(".")[0].split(":");

    this.previousTime = +(prevTimeArr[0] * 60 * 60) + +(prevTimeArr[1] * 60) + +(prevTimeArr[2]);
    this.currentTime = +(currTimeArr[0] * 60 * 60) + +(currTimeArr[1] * 60) + +(currTimeArr[2]);

    this.deltaTime = this.previousTime - this.currentTime;
    this.currentUsage = 3600 / this.deltaTime;

    let scale = 3600 - +this.currentUsage;
    chart.pieChartData = [this.currentUsage,scale];
  }

}

class UsagePieChart implements PieChart {
  pieChartLabels: string[] = ["Usage",""];
  pieChartData: number[];
  pieChartType: string = 'pie';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }

}
