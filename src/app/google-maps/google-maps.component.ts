import { Component, OnInit } from '@angular/core';
import { DeviceService} from '../device.service';
import {Device} from '../interfaces/Device';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  devices: any;

  lat: number = 52.2158186;
  lng: number = 20.9987672;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevicesForUser().
    subscribe(data => {
      this.devices = data;
    });

  }
}
