import {Component, Input} from '@angular/core';

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

  temperatureAsInt(): number {
    if (this.temperature)
      return parseInt(this.temperature[12]);
    return 19;
  }

  dayWithoutTime(): string {
    if (this.day)
      return this.day[12].split('T')[0];
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
    if (this.rain)
      return this.rain.reduce((accumulator, currentValue) =>
      accumulator + parseFloat(currentValue), 0) / this.rain.length;
    return 0.2;
  }
}
