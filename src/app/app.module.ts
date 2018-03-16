import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    GoogleMapsComponent,
    DevicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGTkG4IxFFW23iTTyNvJaED3OGLi5RqXo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
