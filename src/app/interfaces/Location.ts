import {Time} from '@angular/common';

export interface Location {

  id: number;
  gpsLatitude: number;
  gpsLongitude: number;
  date: Date;
  time: Time;
}
