import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForTheDayComponent } from './weather-for-the-day.component';

describe('WeatherForTheDayComponent', () => {
  let component: WeatherForTheDayComponent;
  let fixture: ComponentFixture<WeatherForTheDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForTheDayComponent]
    });
    fixture = TestBed.createComponent(WeatherForTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
