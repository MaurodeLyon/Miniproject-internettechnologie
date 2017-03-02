import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'home',
  template: `<h1>Home page</h1>
            <div>
            <p>The weather in {{location}} currently has the following circumstances:</p>
            <label>temperature: {{temperature}} degrees celsius</label><br/>
            <label>sky: {{sky}}</label><br/>
            <label>humidity: {{humidity}}</label><br/>
            <label>windspeed: {{wind}}</label><br/>
            <label>date: {{date}}</label><br/>
            <label>day: {{day}}</label><br/>
            </div>
            
            `,
  providers: [PostsService]
})

export class HomeComponent {
  location: string;
  temperature: number;
  sky: string;
  humidity: number;
  wind: string;
  date: string;
  day: string;

  constructor(private postsService: PostsService) {
    this.postsService.getWeather().subscribe(weather => {
      this.location = weather.location;
      this.temperature = weather.temperature;
      this.sky = weather.sky;
      this.humidity = weather.humidity;
      this.wind = weather.wind;
      this.date = weather.date;
      this.day = weather.day;
    })
  }
}
