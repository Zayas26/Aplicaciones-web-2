import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;
  error = ""
  constructor(private weatherService: WeatherService) { }

  search (city: string){
    this.weatherService.getWeather(city).subscribe(
      {
        next: result => {this.weather = result; this.error = ""},
        error: error => {this.weather = undefined; this.error="Ciudad No Encontrada o Pueblo"},
      });
  }

  ngOnInit(): void {
  }

}
