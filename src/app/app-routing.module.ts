import { SelectedfligthComponent } from './components/selectedfligth/selectedfligth.component';
import { HomeComponent } from './components/home/home.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { BookingconfirmationComponent } from './components/bookingconfirmation/bookingconfirmation.component';
import { BookingsearchComponent } from './components/bookingsearch/bookingsearch.component';
import { AvailiableflightsComponent } from './components/availiableflights/availiableflights.component';
import { FlightsearchComponent } from './components/flightsearch/flightsearch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},  
  {path:'flightsearch',component:FlightsearchComponent},
  {path:'availablefilght',component:AvailiableflightsComponent},
  {path:'bookingsearch',component:BookingsearchComponent},
  {path:'bookingconfirmation',component:BookingconfirmationComponent},
  {path:'checkin',component:CheckinComponent},
  {path:'selectedflight',component:SelectedfligthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
