import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getParisWeather(){
    return this.http.get(GlobalConstants.apiParis);
        
  }

  getForecast(){
    return this.http.get(GlobalConstants.apiForecastBogota);
  }
  
}
