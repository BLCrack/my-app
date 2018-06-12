import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Device} from './interfaces/Device';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeviceService {

  constructor(private http: HttpClient) { }

  public getDevices(): Observable<Array<Device>> {
    return this.http.get<Array<Device>>('http://77.55.218.238:8080/devices/forcurrentuser');
  }
}
