import {Component, Input} from '@angular/core';
import {WeatherForTheDay} from "../model/weather-for-the-day";

@Component({
  selector: 'app-weather-for-the-day',
  templateUrl: './weather-for-the-day.component.html',
  styleUrls: ['./weather-for-the-day.component.css']
})
export class WeatherForTheDayComponent {
  @Input()
  temperature: string[] | undefined;

  @Input()
  day: string[] | undefined;

  @Input()
  rain: string[] | undefined;

  @Input()
  weatherDay: WeatherForTheDay | undefined

  temperatureAsInt(): number {
    if (this.weatherDay)
      return parseInt(this.weatherDay.temperatures[12]);
    return 19;
  }

  dayWithoutTime(): string {
    if (this.weatherDay)
      return this.weatherDay.days[12].split('T')[0];
    return "2023-08-14"
  }

  pickRightPicture(): number {
    let average = this.getAverageAmountOfRain();
    if (average > 0.2)
      return 1;
    return 3;
  }

  weatherStatus(): string {
    let average = this.getAverageAmountOfRain();
    if (average > 0.2)
      return "Rainy";
    return "Clear";
  }

  getAverageAmountOfRain(): number {
    if (this.weatherDay)
      return this.weatherDay.rain.reduce((accumulator, currentValue) =>
      accumulator + parseFloat(currentValue), 0) / this.weatherDay.rain.length;
    return 0.2;
  }
}
