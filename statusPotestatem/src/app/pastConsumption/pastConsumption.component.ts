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


  // public lineChartData12: any;
  // public lineChartLabels12: Array<any>;
  public lineChartData12:Array<any> = [
    {data: [0], label: 'Series A'},
    {data: [0], label: 'Series B'}
  ];
  public lineChartLabels12:Array<any>;



  public lineChartData24: any;
  public lineChartLabels24: Array<any>;


  public lineChartData48: any;
  public lineChartLabels48: Array<any>;


  public lineChartDataWeek: any;
  public lineChartLabelsWeek: Array<any>;


  //public arthurLineChartLabels: Array<any>;


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
    // this.postsService.getArthurMeasurements().subscribe(posts => {
    //   this.arthurMeasurements = posts;
    //   //console.log(this.measurements.results[0].ticks);
    //   this.genArthurLineData();
    //
    // });
    //
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements = posts;
      this.postsService.getArthurMeasurements().subscribe(posts => {
        this.arthurMeasurements = posts;
        // this.postsService.getMauroMeasurements().subscribe(posts => {
        //     this.mauroMeasurements = posts;
        // });
        //this.gen12HourLineData();
       // console.log(this.arthurMeasurements);

        this.gen12HourLineData();
      });


    });


  }

  public gen12HourLineData(): void {

    this.lineChartData12 = [
      {
        label: 'Arthur',
        data: []
      },
      {
        label: 'Mauro',
        data: []
      }
    ];
    this.lineChartLabels12 = [0,0];

    //this.lineChartLabels12.push();
   // console.log(this.lineChartLabels12[0].data[0]);

   // if (this.arthurMeasurements != null && this.mauroMeasurements != null) {
      var lengthArthur = this.arthurMeasurements.results.length;
      var lengthMauro = this.mauroMeasurements.results.length;
      for (var i = 12; i > 1; i--) {
        var val = this.arthurMeasurements.results[lengthArthur - i].ticks;
        val = val / 187.5;
        val = val * 1000;
        this.lineChartData12[0].data.push(val);



        this.lineChartData12[1].data.push(this.mauroMeasurements.results[lengthMauro - i].ticks);
        this.lineChartLabels12[12-i](this.mauroMeasurements.results[lengthMauro - i].hour);


      }



    //}

  }
  // public genArthurLineData(): void {
  //   this.arthurLineChartData = [
  //     {
  //       label: 'Scatter Dataset',
  //       data: []
  //     }
  //   ];
  //   this.arthurLineChartLabels = [];
  //
  //   if (this.arthurMeasurements != null) {
  //     var length = this.arthurMeasurements.results.length;
  //     for (var i = this.range; i > 1; i--) {
  //       var val = this.arthurMeasurements.results[length - i].ticks;
  //       val = val / 187.5;
  //       val = val * 1000;
  //       this.arthurLineChartData[0].data.push(val);
  //       this.arthurLineChartLabels.push(this.arthurMeasurements.results[length - i].hour);
  //       console.log(this.arthurLineChartData[0].data[i]);
  //     }
  //
  //     //console.log(this.mauroLineChartData[0].data[0]);
  //   }
  // }
  //
  // public genMauroLineData(): void {
  //   //console.log(this.measurements.length);
  //   //this.mauroLineChartData[0].data.clear();
  //   this.mauroLineChartData = [
  //     {
  //       label: 'Scatter Dataset',
  //       data: []
  //     }
  //   ];
  //   this.mauroLineChartLabels = [];
  //
  //   if (this.mauroMeasurements != null) {
  //     var length = this.mauroMeasurements.results.length;
  //     for (var i = this.range; i > 1; i--) {
  //       this.mauroLineChartData[0].data.push(this.mauroMeasurements.results[length - i].ticks);
  //       this.mauroLineChartLabels.push(this.mauroMeasurements.results[length - i].hour);
  //       console.log(this.mauroLineChartData[0].data[i]);
  //     }
  //
  //     //console.log(this.mauroLineChartData[0].data[0]);
  //   }
  // }
}
