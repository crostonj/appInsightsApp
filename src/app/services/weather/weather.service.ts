import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'https://cpsi-appinsights-demo.azurewebsites.net/WeatherForecast';
  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get(this.url)
  }

}
