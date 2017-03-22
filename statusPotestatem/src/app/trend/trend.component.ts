import { Component } from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'
import {LineChart} from "../charts/LineChart";

@Component({
  selector: 'app-root',
  templateUrl: './trend.component.html'
})
export class trendComponent {
  mauroMeasurements: data;
  arthurMeasurements: data;

  mauroTrend: TrendLineChart;
  arthurTrend: TrendLineChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements=posts;
    });
    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurMeasurements=posts;
    });

  }
}
class TrendLineChart implements LineChart {
  lineChartData: Array<any>= [{data: [], label: 'Watt per hour'}];
  lineChartLabels: Array<any>=[];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  dialMeter:boolean=false;
  constructor(dialMeter:boolean)
  {
    this.dialMeter=dialMeter;
  }
  public genListData(values:data):void {
    if (values != null) {
      var length = values.results.length;
      var currentDay=values.results[length-1].day;

      for (var i = 24; i > 1; i--) {
        if(this.dialMeter)
        {
          let val = values.results[length - i].ticks;
          val = val / 187.5;
          val = val * 1000;
          this.lineChartData[0].data.push(val);
        }
        else{
          this.lineChartData[0].data.push(values.results[length - i].ticks);
        }
        this.lineChartLabels.push(values.results[length - i].hour);
      }
    }
  }
  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}


