import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { WeatherForTheDayComponent } from './weather-for-the-day/weather-for-the-day.component';
import {FormsModule} from "@angular/forms";

import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherForTheDayComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
