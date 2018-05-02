import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeviceService {

  constructor(private http: HttpClient) { }

  devicesURL = 'http://localhost:8080/devices';

  public getDevicesForUser() {
    return this.http.get(this.devicesURL);
  }

}
