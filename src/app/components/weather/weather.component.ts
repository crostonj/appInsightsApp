import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  datasource: any;

  columnsToDisplay = ["date", "temperatureC", "temperatureF", "summary"];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather()
      .subscribe(response => {
        this.datasource = response;
      })
  }

}
