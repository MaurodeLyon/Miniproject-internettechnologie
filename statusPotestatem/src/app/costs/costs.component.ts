import {Component} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {BarChart} from "../charts/BarChart";

@Component({
  selector: 'app-root',
  templateUrl: './costs.component.html',
  providers: [PostsService]
})

export class costsComponent {
  mauroBarChart: MauroBarChart;
  arthurBarChart: ArthurBarChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroBarChart = new MauroBarChart();
      let price = [];
      let date = [];
      let ticksPerDay = 0;
      let prevDay = posts.results[0].day;
      for (let i = 0; i < posts.results.length; i++) {
        let currentDay = posts.results[i].day;
        if (currentDay == prevDay) {
          ticksPerDay += posts.results[i].ticks;
        }
        else {
          price.push(ticksPerDay * 0.00023);
          date.push(posts.results[i].day + "-" + posts.results[i].month);
          ticksPerDay = 0;
        }
        prevDay = currentDay;
      }
      this.mauroBarChart.barChartData[0].data = price;
      this.mauroBarChart.barChartLabels = date;
    });

    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurBarChart = new ArthurBarChart();
      let price = [];
      let date = [];
      let ticksPerDay = 0;
      let prevDay = posts.results[0].day;
      for (let i = 0; i < posts.results.length; i++) {
        let currentDay = posts.results[i].day;
        if (currentDay == prevDay) {
          ticksPerDay += (posts.results[i].ticks / 187.5) * 1000;
        }
        else {
          price.push(ticksPerDay * 0.00023);
          date.push(posts.results[i].day + "-" + posts.results[i].month);
          ticksPerDay = 0;
        }
        prevDay = currentDay;
      }
      this.arthurBarChart.barChartData[0].data = price;
      this.arthurBarChart.barChartLabels = date;
    });
  }
}

class ArthurBarChart implements BarChart {
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [{data: [], label: '€'}];

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}

class MauroBarChart implements BarChart {
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [{data: [], label: '€'}];

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}
