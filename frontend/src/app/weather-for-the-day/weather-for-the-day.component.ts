import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-for-the-day',
  templateUrl: './weather-for-the-day.component.html',
  styleUrls: ['./weather-for-the-day.component.css']
})
export class WeatherForTheDayComponent {
  @Input()
  temperature: string | undefined;

  @Input()
  day: string | undefined;

  temperatureAsInt(): number {
    return parseInt(this.temperature!);
  }

  dayWithoutTime(): string {
    return this.day!.split('T')[0];
  }

}
