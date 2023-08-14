import {Component, Input} from '@angular/core';
import {DayClassification, WeatherForTheDay} from "../model/weather-for-the-day";

const rainyImage = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp';

const clearImage = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp';

const amountOfRainThatIsConsideredRainy = 0.15;

const noImage = '';
const unknownStatus = 'unknown';

@Component({
  selector: 'app-weather-for-the-day',
  templateUrl: './weather-for-the-day.component.html',
  styleUrls: ['./weather-for-the-day.component.css']
})
export class WeatherForTheDayComponent {
  @Input()
  weatherDay: WeatherForTheDay | undefined

  temperatureAsInt(): number {
    if (this.weatherDay)
      return parseInt(this.weatherDay.temperatures[12]);
    return -100;
  }

  dayWithoutTime(): string {
    if (this.weatherDay)
      return this.weatherDay.days[12].split('T')[0];
    return "2023-08-14"
  }

  picture(): string {
    if (this.weatherDay === undefined) {
      return noImage;
    }

    const pictures = new Map<DayClassification, string>();
    pictures.set(DayClassification.RAINY, rainyImage);
    pictures.set(DayClassification.CLEAR, clearImage);

    return pictures.get(this.weatherDay.classification()) || noImage;
  }


  weatherStatus(): string {
    if (this.weatherDay === undefined) {
      return unknownStatus;
    }

    const states = new Map<DayClassification, string>();
    states.set(DayClassification.RAINY, "Rainy");
    states.set(DayClassification.CLEAR, "Clear");

    return states.get(this.weatherDay.classification()) || unknownStatus;
  }

}
