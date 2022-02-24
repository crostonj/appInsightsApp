import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.apihost + 'WeatherForecast';
  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get(this.url);
  }

}
