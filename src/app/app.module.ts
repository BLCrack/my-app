import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { DeviceService } from './device.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import {FormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    GoogleMapsComponent,
    DevicesComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGTkG4IxFFW23iTTyNvJaED3OGLi5RqXo'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/login']
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeviceService, UserService, LoginService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
