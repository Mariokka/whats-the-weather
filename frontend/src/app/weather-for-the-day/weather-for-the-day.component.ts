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
    return parseInt(this.temperature![12]);
  }

  dayWithoutTime(): string {
    return this.day![12].split('T')[0];
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
    return this.rain!.reduce((accumulator, currentValue) =>
      accumulator + parseFloat(currentValue), 0) / this.rain!.length;
  }
}
