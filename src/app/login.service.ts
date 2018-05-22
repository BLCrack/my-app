import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenInfo } from './interfaces/TokenInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient){}

  public login(username: string, password: string) {
    return this.http.post<TokenInfo>('http://localhost:8080/login', {username, password}, httpOptions);      
  }
}
