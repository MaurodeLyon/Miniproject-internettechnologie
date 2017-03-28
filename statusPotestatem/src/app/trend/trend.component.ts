import { Component } from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'
import {LineChart} from "../charts/LineChart";

@Component({
  selector: 'app-root',
  templateUrl: './trend.component.html',
  providers: [PostsService]
})
export class trendComponent {
  mauroMeasurements: data;
  arthurMeasurements: data;

  mauroTrend: TrendLineChart;
  arthurTrend: TrendLineChart;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {
      this.mauroMeasurements=posts;
      this.mauroTrend = new TrendLineChart(false,5);
      this.mauroTrend.genListData(posts);
    });
    this.postsService.getArthurMeasurements().subscribe(posts => {
      this.arthurMeasurements=posts;
      this.arthurTrend = new TrendLineChart(true,5);
      this.arthurTrend.genListData(posts);
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
  times:number=0;

  constructor(dialMeter:boolean,times:number)
  {
    this.dialMeter=dialMeter;
    this.times=times;
  }
  public genListData(values:data):void {
    if (values != null) {
       var length = values.results.length;
      var currentHour=values.results[length-1].hour;

      for(var i = 24; i > 0;i--)
      {
        //console.log(i);
        var total=0;
        var average=0;
        //var times=5;
        for(var j = 0; j < this.times; j++ )
        {
            if(this.dialMeter)
            {
              let val = values.results[length - 1 - i - (j*24)].ticks;
                   val = val / 187.5;
                   val = val * 1000;
              total+=val;
            }
            else {
              total+=values.results[length - 1 - i - (j*24)].ticks;
            }




            // if(((values.results[length - 1].hour+(24-i))%24 )==14)
            // {
            //   //console.log(total);
            //   console.log(values.results[length - 1 - i - (j*24)].ticks);
            // }
        }

        average = total /this.times;
        this.lineChartData[0].data.push(average);
        //console.log((values.results[length - 1].hour+(24-i))%24 +1);
        this.lineChartLabels.push((values.results[length - 1].hour+(24-i))%24+1);

        total=0;
        average=0;

      }


      // var length = values.results.length;
      // var currentDay=values.results[length-1].day;
      //
      // for (var i = 24; i > 1; i--) {
      //   if(this.dialMeter)
      //   {
      //     let val = values.results[length - i].ticks;
      //     val = val / 187.5;
      //     val = val * 1000;
      //     this.lineChartData[0].data.push(val);
      //   }
      //   else{
      //     this.lineChartData[0].data.push(values.results[length - i].ticks);
      //   }
      //   this.lineChartLabels.push(values.results[length - i].hour);
      // }
    }
  }
  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}


