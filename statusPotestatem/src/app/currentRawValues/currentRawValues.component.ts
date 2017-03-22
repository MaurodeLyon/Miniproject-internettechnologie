import {Component, Input} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'

@Component({
  selector: 'currentRawValues',
  templateUrl: 'currentRawValues.component.html',
  providers: [PostsService]

})
export class CurrentRawValuesComponent {

  title = 'show graphs!';
  mauroMeasurements: data;
  arthurMeasurements: data;
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   }]

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
    { // grey
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
      //console.log(this.measurements.results[0].ticks);
      this.genArthurLineData();
    });
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      //console.log(this.measurements.results[0].ticks);
      this.genMauroLineData();
    });
  }
  public genArthurLineData():void{
    this.arthurLineChartData= [
      {label: 'Scatter Dataset', data: []}
    ];
    this.arthurLineChartLabels= [];
    if (this.arthurMeasurements != null) {
      var length = this.arthurMeasurements.results.length;
      for (var i = 13; i > 1; i--) {
        this.arthurLineChartData[0].data.push(this.arthurMeasurements.results[length-i].ticks);
        this.arthurLineChartLabels.push(this.arthurMeasurements.results[length-i].hour);
        console.log(this.arthurLineChartData[0].data[i]);
      }

    }
  }

  public genMauroLineData(): void {
    this.mauroLineChartData= [
      {label: 'Scatter Dataset', data: []}
    ];
    this.mauroLineChartLabels= [];
    if (this.mauroMeasurements != null) {
      var length = this.mauroMeasurements.results.length;
      for (var i = 13; i > 1; i--) {
        this.mauroLineChartData[0].data.push(this.mauroMeasurements.results[length-i].ticks);
        this.mauroLineChartLabels.push(this.mauroMeasurements.results[length-i].hour);
        console.log(this.mauroLineChartData[0].data[i]);
      }

    }
  }
}
