import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Data} from '../services/Data';
import {LineChart} from '../charts/LineChart';

@Component({
  selector: 'app-root',
  templateUrl: './trend.component.html',
  providers: [PostsService]
})
export class TrendComponent {
  mauroMeasurements: Data;
  arthurMeasurements: Data;

  mauroTrend: TrendLineChart;
  arthurTrend: TrendLineChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      this.mauroTrend = new TrendLineChart(false, 4);
      this.mauroTrend.genListData(posts);
    });
    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurMeasurements = posts;
      this.arthurTrend = new TrendLineChart(true, 4);
      this.arthurTrend.genListData(posts);
    });
  }
}
class TrendLineChart implements LineChart {
  lineChartData: Array<any> = [{data: [], label: 'Watt per hour'}];
  lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: any = true;
  public lineChartType: any = 'line';
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

  dialMeter: any = false;
  times: any = 0;

  constructor(dialMeter: boolean, times: number) {
    this.dialMeter = dialMeter;
    this.times = times;
  }

  public genListData(values: Data): void {
    if (values != null) {
      const length = values.results.length;
      for (let i = 24; i > 0; i--) {
        let total = 0;
        let average = 0;
        for (let j = 0; j < this.times; j++) {
          if (this.dialMeter) {
            let val = values.results[length - 1 - i - (j * 24)].ticks;
            val = val / 187.5;
            val = val * 1000;
            total += val;
          } else {
            total += values.results[length - 1 - i - (j * 24)].ticks;
          }
        }

        average = total / this.times;
        this.lineChartData[0].data.push(average);
        this.lineChartLabels.push((values.results[length - 1].hour + (24 - i)) % 24 + 1);
        total = 0;
        average = 0;
      }
    }
  }

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}
