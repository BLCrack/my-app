import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../interfaces/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  signIn(emailText: string, passwordText: string) {

    let isRegister = false;
    const loginUser: User = ({
      id: null,
      login: emailText,
      password: passwordText
    });

    for (let usr of this.users) {
      if (usr.login === loginUser.login || usr.password === loginUser.password) {
        isRegister = true;
      }
    }
    console.log(JSON.stringify(loginUser));

    if (isRegister) {
      // jesli uzytkownik jest zarejestrowany to przekierowac na /admin
    } else {
      window.alert('Nieprawidłowy login lub hasło!');
      // nie jest zarejestrowany wiec odświeżyć mi stronę logowania /login lub nie robic nic.
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => console.log("Error: ", error),
        () => console.log(this.users)
      );
  }
}
