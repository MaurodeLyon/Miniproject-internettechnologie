import {Component} from '@angular/core';
import  {PostsService} from './posts.service';
import {data} from './Data'

@Component({
  selector: 'currentEnergyConsumption',
  templateUrl: 'currentEnergyConsumption.component.html',
  providers: [PostsService]
})
export class CurrentEnergyConsumptionComponent {
  title = 'show graphs!';
  measurements: data;
  zoomedMeasurements: number[] = [0];


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

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

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public lineChartLabels: Array<any> = ['0',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
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
  //public lineChartData:any[] = this.zoomedMeasurements;
  public lineChartData: any = [
    {
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }]
    }
  ];


  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(posts => {
      this.measurements = posts;
      //console.log(this.measurements.results[0].ticks);
      this.genLineData();
    });
  }

  public genLineData(): void {
    //console.log(this.measurements.length);
    if (this.measurements != null) {
      var length = this.measurements.results.length;
      for (var i = 1; i < 12; i++) {
        this.lineChartData[0].data.push(this.measurements.results[length - i].ticks);
        console.log(this.lineChartData[0].data[i]);
      }

      for (var i = 0; i < this.zoomedMeasurements.length; i++) {
        //console.log(this.zoomedMeasurements[i]);
      }
      //console.log(this.lineChartData[0].data[0]);
    }
  }
}
