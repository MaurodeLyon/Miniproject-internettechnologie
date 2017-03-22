import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private http: Http) {
    console.log('PostsService Initialized...')
  }
  getMauroMeasurements() {
    return this.http.get('https://vestigiumserver.herokuapp.com/api/mauro_meting').map(res => res.json());
  }
  getArthurMeasurements() {
    return this.http.get('https://vestigiumserver.herokuapp.com/api/arthur_meting').map(res => res.json());
  }
}