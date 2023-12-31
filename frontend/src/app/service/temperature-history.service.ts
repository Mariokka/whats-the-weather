import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TemperatureHistory} from "../model/temperature-history";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TemperatureHistoryService {
  constructor(private http: HttpClient) {}
  requestTemperature(startDay: string, endDay: string) {
    return this.http.get<WeatherDto>(
    `https://archive-api.open-meteo.com/v1/archive?latitude=53.5507&longitude=9.993&start_date=${startDay}&end_date=${endDay}&hourly=temperature_2m,rain`)
      .pipe(map(this.toTemperatureHistory));
  }

  toTemperatureHistory(weatherDto: WeatherDto): TemperatureHistory {
    return new TemperatureHistory(
      weatherDto.hourly.time,
      weatherDto.hourly.temperature_2m,
      weatherDto.hourly.rain
    )
  }
}

export interface WeatherDto {
  latitude: string;
  longitude: string;
  generationtime_ms: string;
  utc_offset_seconds: string;
  timezone: string;
  timezone_abbreviation: string;
  elevation: string;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  rain: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: string[];
  rain: string[];
}
