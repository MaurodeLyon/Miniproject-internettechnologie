import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {LineChart} from '../charts/LineChart';

@Component({
  selector: 'app-current-raw-values',
  templateUrl: 'currentRawValues.component.html',
  providers: [PostsService]

})
export class CurrentRawValuesComponent {
  mauroLineChart: MauroLineChart;
  arthurLineChart: ArthurLineChart;

  constructor(private postsService: PostsService) {
    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurLineChart = new MauroLineChart();
      this.arthurLineChart.lineChartLabels = [];
      this.arthurLineChart.lineChartData = [
        {label: 'Raw tick data per hour', data: []}
      ];
      if (posts != null) {
        const length = posts.results.length;
        for (let i = 13; i > 1; i--) {
          this.arthurLineChart.lineChartData[0].data.push(posts.results[length - i].ticks);
          this.arthurLineChart.lineChartLabels.push(posts.results[length - i].hour);
        }
      }
    });
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroLineChart = new MauroLineChart();
      this.mauroLineChart.lineChartLabels = [];
      this.mauroLineChart.lineChartData = [
        {label: 'Raw tick data per hour', data: []}
      ];
      if (posts != null) {
        const length = posts.results.length;
        for (let i = 13; i > 1; i--) {
          this.mauroLineChart.lineChartData[0].data.push(posts.results[length - i].ticks);
          this.mauroLineChart.lineChartLabels.push(posts.results[length - i].hour);
        }
      }
    });
  }
}

class MauroLineChart implements LineChart {
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  lineChartLegend: any = true;
  lineChartType: any = 'line';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}

class ArthurLineChart implements LineChart {
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  lineChartLegend: any = true;
  lineChartType: any = 'line';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}
