import {Component, Input} from '@angular/core';
import  {PostsService} from '../services/posts.service';
import {data} from '../services/Data'
import {LineChart} from "../charts/LineChart";

@Component({
  selector: 'pastConsumption',
  templateUrl: 'pastConsumption.component.html',
  providers: [PostsService]

})
export class pastConsumptionComponent {
  MauroLineChart12Hour: MauroLineChart12Hour;

  constructor(private postsService: PostsService) {
    this.postsService.getMauroMeasurements().subscribe(posts => {

    });
  }
}

class MauroLineChart12Hour implements LineChart {
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any;
  lineChartColors: Array<any>;
  lineChartLegend: boolean;
  lineChartType: string = 'line';

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }

}
