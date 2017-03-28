import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'

@Component({
  selector: 'currentRawValues',
  templateUrl: 'currentRawValues.component.html',
  providers: [PostsService]

})
export class CurrentRawValuesComponent {
  mauroMeasurements: data;
  arthurMeasurements: data;

  public mauroLineChartData: any;
  public mauroLineChartLabels: Array<any>;

  public arthurLineChartData: any;
  public arthurLineChartLabels: Array<any>;

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

  constructor(private postsService: PostsService) {
    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurMeasurements = posts;
      this.genArthurLineData();
    });
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      this.genMauroLineData();
    });
  }

  public genArthurLineData(): void {
    this.arthurLineChartData = [
      {label: 'Raw tick data per hour', data: []}
    ];
    this.arthurLineChartLabels = [];
    if (this.arthurMeasurements != null) {
      let length = this.arthurMeasurements.results.length;
      for (let i = 13; i > 1; i--) {
        this.arthurLineChartData[0].data.push(this.arthurMeasurements.results[length - i].ticks);
        this.arthurLineChartLabels.push(this.arthurMeasurements.results[length - i].hour);
      }
    }
  }

  public genMauroLineData(): void {
    this.mauroLineChartData = [
      {label: 'Raw tick data per hour', data: []}
    ];
    this.mauroLineChartLabels = [];
    if (this.mauroMeasurements != null) {
      let length = this.mauroMeasurements.results.length;
      for (let i = 13; i > 1; i--) {
        this.mauroLineChartData[0].data.push(this.mauroMeasurements.results[length - i].ticks);
        this.mauroLineChartLabels.push(this.mauroMeasurements.results[length - i].hour);
      }
    }
  }
}
