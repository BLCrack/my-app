import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoogleMapsComponent} from './google-maps/google-maps.component';
import {HomeComponent} from './home/home.component';
import {DevicesComponent} from './devices/devices.component';

const routes: Routes = [
  {path: 'map', component: GoogleMapsComponent },
  {path: 'home', component: HomeComponent},
  {path: 'devices', component: DevicesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})



export class AppRoutingModule { }
