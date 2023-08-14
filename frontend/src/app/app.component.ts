import {Component, Input, OnInit} from '@angular/core';
import {TemperatureHistory} from "./model/temperature-history";
import {TemperatureHistoryService, WeatherDto} from "./service/temperature-history.service";
import {WeatherForTheDay} from "./model/weather-for-the-day";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatureHistory: TemperatureHistory | undefined;
  days: WeatherForTheDay[] = [];
  startDate = "2023-07-01";
  endDate = "2023-08-01";
  updateStartDate() {
    this.service.requestTemperature(this.startDate!, this.endDate!).subscribe((value) => {
      this.temperatureHistory = value;
      this.moveDataToWeatherArray();
    });
  }
  constructor(public service: TemperatureHistoryService) {
    service.requestTemperature(this.startDate!, this.endDate!).subscribe((value) => {
      this.temperatureHistory = value;
      this.moveDataToWeatherArray();
    });
  }

  private moveDataToWeatherArray() {
    if (this.temperatureHistory) {
      this.days.length = 0;
      for (let i = 0; i < this.temperatureHistory.days.length; i += 24) {
        let day: WeatherForTheDay =
          {
            days: this.temperatureHistory!.days.slice(i, i + 24),
            temperatures: this.temperatureHistory!.temperatures.slice(i, i + 24),
            rain: this.temperatureHistory!.rain.slice(i, i + 24)
          };
        this.days.push(day);
      }
    }
  }
}
