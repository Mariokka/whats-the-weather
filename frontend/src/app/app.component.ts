import { Component } from '@angular/core';
import {TemperatureHistory} from "./model/temperature-history";
import {TemperatureHistoryService, WeatherDto} from "./service/temperature-history.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatureHistory: TemperatureHistory | undefined;
  startDate: Date = new Date("2023-07-11T00:00");
  endDate: Date = new Date("2023-08-11T00:00");

  constructor(public service: TemperatureHistoryService) {
    service.requestTemperature(this.startDate!, this.endDate!).subscribe((value) => {
      this.temperatureHistory = value;
    });
  }
}
