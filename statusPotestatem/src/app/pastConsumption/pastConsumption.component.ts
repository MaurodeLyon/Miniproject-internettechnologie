import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'
import {LineChart} from "../charts/LineChart";

@Component({
  selector: 'pastConsumption',
  templateUrl: 'pastConsumption.component.html',
  providers: [PostsService]

})
export class pastConsumptionComponent {
  mauroMeasurements: data;
  arthurMeasurements: data;

  mauro12: HourlyLineChart;
  mauro24: HourlyLineChart;
  mauro48: HourlyLineChart;

  arthur12: HourlyLineChart;
  arthur24: HourlyLineChart;
  arthur48: HourlyLineChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      this.mauro12 = new HourlyLineChart(12, false);
      this.mauro24 = new HourlyLineChart(24, false);
      this.mauro48 = new HourlyLineChart(48, false);

      this.mauro12.genListData(posts);
      this.mauro24.genListData(posts);
      this.mauro48.genListData(posts);
    });

    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurMeasurements = posts;


      this.arthur12 = new HourlyLineChart(12, true);
      this.arthur24 = new HourlyLineChart(24, true);
      this.arthur48 = new HourlyLineChart(48, true);

      this.arthur12.genListData(posts);
      this.arthur24.genListData(posts);
      this.arthur48.genListData(posts);
    });
  }
}

class HourlyLineChart implements LineChart {
  lineChartData: Array<any> = [{data: [], label: 'Watt per hour'}];
  lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  range: number = 0;
  dialMeter: boolean = false;

  constructor(destinedRange: number, dialMeter: boolean) {
    this.range = destinedRange;
    this.dialMeter = dialMeter;
  }

  public genListData(values: data): void {
    if (values != null) {
      let length = values.results.length;
      for (let i = this.range; i > 1; i--) {
        if (this.dialMeter) {
          let val = values.results[length - i].ticks;
          val = val / 187.5;
          val = val * 1000;
          this.lineChartData[0].data.push(val);
        }
        else {
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
