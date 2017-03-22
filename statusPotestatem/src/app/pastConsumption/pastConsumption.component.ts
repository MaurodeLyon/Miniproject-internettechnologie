import {Component, Input} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'

@Component({
  selector: 'pastConsumption',
  templateUrl: 'pastConsumption.component.html',
  providers: [PostsService]

})
export class pastConsumptionComponent {
  mauroMeasurements: data;
  arthurMeasurements: data;
  range:number=12;






  public arthurLineChartLabels12: Array<any>;
  public mauroLineChartLabels12: Array<any>;

  public arthurLineChartLabels24: Array<any>;
  public mauroLineChartLabels24: Array<any>;

  public arthurLineChartLabels48: Array<any>;
  public mauroLineChartLabels48: Array<any>;

  public arthurLineChartData12: Array<any>;
  public mauroLineChartData12: Array<any>;

  public arthurLineChartData24: Array<any>;
  public mauroLineChartData24: Array<any>;

  public arthurLineChartData48: Array<any>;
  public mauroLineChartData48: Array<any>;


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
    //
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      this.genMauroLineData()

    });


  }
  // public setRange(value): void{
  //   this.range=value;
  //   this.arthurLineChartLabels.length=this.range;
  //   //this.arthurLineChartLabels.push(22);
  //   //this.mauroLineChartLabels.push(22);
  //   this.genMauroLineData();this.genArthurLineData();
  //   console.log(value);
  // }

  public genArthurLineData12(): void {
    this.arthurLineChartData12 = [
      {
        label: 'Scatter Dataset',
        data: []
      }
    ];
    this.arthurLineChartLabels12 = [];

    if (this.arthurMeasurements != null) {
      var length = this.arthurMeasurements.results.length;
      for (var i = this.range; i > 1; i--) {
        var val = this.arthurMeasurements.results[length - i].ticks;
        val = val / 187.5;
        val = val * 1000;
        this.arthurLineChartData12[0].data.push(val);

        this.arthurLineChartLabels12.push((this.arthurMeasurements.results[length - i].hour));
        console.log(this.arthurLineChartData12[0].data[i]);
      }
    }
  }

  public genMauroLineData(): void {
    //console.log(this.measurements.length);
    //this.mauroLineChartData[0].data.clear();
    this.mauroLineChartData = [
      {
        label: 'Scatter Dataset',
        data: []
      }
    ];
    this.mauroLineChartLabels = [];


    if (this.mauroMeasurements != null) {
      var length = this.mauroMeasurements.results.length;
      for (var i = this.range; i > 1; i--) {
        this.mauroLineChartData[0].data.push(this.mauroMeasurements.results[length - i].ticks);
        this.mauroLineChartLabels.push(this.mauroMeasurements.results[length - i].hour);
        console.log(this.mauroLineChartData[0].data[i]);
      }

      //console.log(this.mauroLineChartData[0].data[0]);
    }
  }
}
