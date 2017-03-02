import {Component} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {Person} from './Person'
//import { ChartsModule } from 'ng2-charts';

//import Chart from 'chart.js'
//declare var Chart:any;
@Component({
  selector: 'statistics',
  templateUrl: 'statistics.component.html',
  providers: [PostsService]
})

export class StatisticsComponent {

  //Bar
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public randomize():void {

    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  persons: Person[];
  //genderPie
  private genderItems: number[]=[];

  public genderPieChartLabels:string[] = ['Male', 'Female'];
  public genderPieChartData:number[] = this.genderItems;
  public genderPieChartType:string = 'pie';
  //AgePie
  private ageItems: number[]=[];

  public agePieChartLabels:string[] = ['Young Sanics', 'Adult Sanics', 'Elderly Sanics'];
  public agePieChartData:number[] = this.ageItems;
  public agePieChartType:string = 'pie';

  constructor(private  postsService: PostsService) {
    this.persons = this.postsService.getPosts();
    this.genGenderPieData();
    this.genAgePieData();
  }

  public genGenderPieData():void{
    var males=0;
    var females=0;
    if(this.persons!=null)
    {
      for(var i = 1; i < this.persons.length; i++){
        //console.log(this.persons[i].gender);
        if(this.persons[i].gender =="M")
        {
          males++;
        }
        else{
          females++;
        }
      }
      this.genderItems.push(males);
      this.genderItems.push(females);
    }
}
  public genAgePieData():void {
    var young = 0;
    var adult = 0;
    var elder = 0;
    if (this.persons != null) {
      for (var i = 1; i < this.persons.length; i++) {
        //console.log(this.persons[i].gender);
        if (this.persons[i].age < 20) {
          young++;
        }
        else if (this.persons[i].age > 20 && this.persons[i].age < 60) {
          adult++;
        }
        else if (this.persons[i].age > 60) {
          elder++;
        }
      }

      this.ageItems.push(young);
      this.ageItems.push(adult);
      this.ageItems.push(elder);
    }
  }


  ///Debug
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
