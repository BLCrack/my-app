import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      { path: 'map', component: GoogleMapsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'devices', component: DevicesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
