import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/Weather';
import { Forecast } from 'src/app/models/Forecast';
import { Current } from 'src/app/models/Current';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parisWeather : Current;
  forecast: Array<Forecast>;
  constructor(private weatherServ: WeatherService) { }

  ngOnInit(): void {
    //Obtener Clima actual bogota
    this.weatherServ.getParisWeather()
        .subscribe(res=>{
          this.parisWeather = res as Current;
       
          console.log(this.parisWeather.name);
        })
    
    //Obtener pronostico clica bogota
    this.weatherServ.getForecast()
        .subscribe(res=>{
          this.forecast = res['list'] as Array<Forecast>;
          for (let index = 0; index <= 24 ; index=index + 8) {
            let milisecons = this.forecast[index].dt * 1000;
            this.forecast[index].dateFormat = new Date(milisecons);
          }  


          //Prueba de que la fecha es correcta 
          //let milisecons = this.forecast[16].dt * 1000;
          //console.log(new Date(milisecons));

        })    
  }

}
