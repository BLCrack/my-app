import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './interfaces/User';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:8080/users/all');
  }

  /*public addUser(newUser: User): Observable<User> {
    return this.http.post('http://localhost:8080/users/newuser', newUser).map(this.extractData);
  }

  public extractData(res: Response) {
    const body = res.json();
    return body || {};
  }*/

}
