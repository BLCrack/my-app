import { Component, OnInit } from '@angular/core';
import { Device } from '../interfaces/Device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.getDevices();
  }

  getDevices()  {
    this.deviceService.getDevices()
        .subscribe(devices => this.devices = devices);
  }

}
