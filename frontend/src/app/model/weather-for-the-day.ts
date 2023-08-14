const amountOfRainThatIsConsideredRainy = 0.15;
export class WeatherForTheDay {
  constructor(public days: string[], public temperatures: string[], public  rain: string[]) {}

  getAverageAmountOfRain() {
    return this.rain.reduce((accumulator, currentValue) =>
      accumulator + parseFloat(currentValue), 0) / this.rain.length;
  }

  classification() {
    if (this.getAverageAmountOfRain() > amountOfRainThatIsConsideredRainy)
      return DayClassification.RAINY;
    return DayClassification.CLEAR;
  }
}

export enum DayClassification {
  RAINY,
  CLEAR
}
