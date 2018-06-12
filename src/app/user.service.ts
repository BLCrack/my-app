import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {User} from './interfaces/User';
import {catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    console.log("getUsers");
    return this.http.get<Array<User>>('http://77.55.218.238:8080/users/all');
  }

  public addUser(newUser: User): Observable<{}> {
    console.log("addUser: " + newUser);
    this.http.get<Array<User>>('http://77.55.218.238:8080/users/all')
      .subscribe(users => console.log(users));
    return this.http.post('http://77.55.218.238:8080/users/newuser', newUser, httpOptions)
                    .pipe(
                      catchError(this.handleError<User>('addUser'))
                    );
  }

  public extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return Observable.of(result as T);
    };
  }

}
