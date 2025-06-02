import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { WeatherData } from '../types/weather';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.API_KEY}`
    );
  }
}
