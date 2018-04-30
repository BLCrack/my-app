import {Time} from '@angular/common';

export interface Location {

  id: number;
  GPS_latitude: number;
  GPS_longitude: number;
  date: Date;
  time: Time;
}
