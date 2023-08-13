import {Component, Input, OnInit} from '@angular/core';
import {TemperatureHistory} from "./model/temperature-history";
import {TemperatureHistoryService, WeatherDto} from "./service/temperature-history.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatureHistory: TemperatureHistory | undefined;
  startDate = "2023-07-01";
  endDate = "2023-08-01";
  updateStartDate() {
    this.service.requestTemperature(this.startDate!, this.endDate!).subscribe((value) => {
      this.temperatureHistory = value;
    });
  }
  constructor(public service: TemperatureHistoryService) {
    service.requestTemperature(this.startDate!, this.endDate!).subscribe((value) => {
      this.temperatureHistory = value;
    });
  }
}
