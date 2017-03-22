import {Component} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {data} from "../services/Data";
import {BarChart} from "../charts/BarChart";

@Component({
  selector: 'app-root',
  templateUrl: './costs.component.html',
  providers: [PostsService]
})

export class costsComponent {
  mauroData: data;
  mauroBarChart: mauroBarChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroData = posts;
      this.mauroBarChart = new mauroBarChart();
      console.log(this.mauroData);
      let prijs = [];
      let uur = [];
      for (let i = 0; i < this.mauroData.results.length; i++) {
        prijs.push(this.mauroData.results[i].ticks * 0.00023);
        uur.push(this.mauroData.results[i].hour);
      }
      console.log(prijs);
      this.mauroBarChart.barChartData[0].data = prijs;
      this.mauroBarChart.barChartLabels = uur;
    });
  }
}


class mauroBarChart implements BarChart {
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [
    {data: [], label: '€'}
  ];

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}
