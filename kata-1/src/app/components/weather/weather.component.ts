import { Component, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  imports: [AsyncPipe],
  standalone: true,
})
export class WeatherComponent {
  private weatherService = inject(WeatherService);

  public weather$ = this.weatherService.getWeather('Paris');

  kelvinToCelsius(kelvin: number | undefined): number | undefined {
    if (kelvin === undefined) {
      return undefined;
    }
    return kelvin - 273.15;
  }
}
