import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 52.2158186;
  lng: number = 20.9987672;
}
