import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public signIn(emailText: string, passwordText: string) {
    localStorage.clear();
    this.loginService.login(emailText, passwordText)
                     .subscribe(tokenInfo => {
                       localStorage.setItem('token', tokenInfo.token);
                       this.router.navigate(['/admin']);
                      },
                               error => window.alert('Nieprawidłowy login lub hasło!'))
  }
}
