import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

 constructor(public jwtHelper: JwtHelperService) {}
  
  public isAuthenticated(): boolean {    
    const token = this.jwtHelper.tokenGetter();
    if (token != null) {
      var user = this.jwtHelper.decodeToken(token).sub;
      return user != null;
    }
    return false;
  }
}
