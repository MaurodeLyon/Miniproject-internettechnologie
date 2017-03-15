import {Component, Input} from '@angular/core';
import  {PostsService} from './posts.service';
import {data} from './Data'

@Component({
  selector: 'currentEnergyConsumption',
  templateUrl: 'currentConsumption.component.html',
  providers: [PostsService]

})
export class CurrentConsumptionComponent {

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
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  //public mauroLineChartData:any[] = this.zoomedMeasurements;




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
  public genArthurLineData():void
  {
    this.arthurLineChartData= [
      {
        label: 'Scatter Dataset',
        data: []
      }
    ];
    this.arthurLineChartLabels= [];

    if (this.arthurMeasurements != null) {
      var length = this.arthurMeasurements.results.length;
      for (var i = 24; i > 1; i--) {
        let val = this.arthurMeasurements.results[length-i].ticks;
        val= val/187.5;
        val=val*1000;
        this.arthurLineChartData[0].data.push(val);
        this.arthurLineChartLabels.push(this.arthurMeasurements.results[length-i].hour);
        console.log(this.arthurLineChartData[0].data[i]);
      }

      //console.log(this.mauroLineChartData[0].data[0]);
    }
  }

  public genMauroLineData():void
  {
    //console.log(this.measurements.length);
    //this.mauroLineChartData[0].data.clear();
    this.mauroLineChartData= [
      {
        label: 'Scatter Dataset',
        data: []
      }
    ];
    this.mauroLineChartLabels= [];

    if (this.mauroMeasurements != null) {
      var length = this.mauroMeasurements.results.length;
      for (var i = 24; i > 1; i--) {
        this.mauroLineChartData[0].data.push(this.mauroMeasurements.results[length-i].ticks);
        this.mauroLineChartLabels.push(this.mauroMeasurements.results[length-i].hour);
        console.log(this.mauroLineChartData[0].data[i]);
      }

      //console.log(this.mauroLineChartData[0].data[0]);
    }
  }
}
