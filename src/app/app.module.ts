import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightsearchComponent } from './components/flightsearch/flightsearch.component';
import { AvailiableflightsComponent } from './components/availiableflights/availiableflights.component';
import { SelectedfligthComponent } from './components/selectedfligth/selectedfligth.component';
import { BookingconfirmationComponent } from './components/bookingconfirmation/bookingconfirmation.component';
import { BookingsearchComponent } from './components/bookingsearch/bookingsearch.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightsearchComponent,
    AvailiableflightsComponent,
    SelectedfligthComponent,
    BookingconfirmationComponent,
    BookingsearchComponent,
    CheckinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
