import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  addUser(emailText: string, passwordText: string) {

    let isRegister = false;
    const newUser: User = ({
      id: null,
      login: emailText,
      password: passwordText
    });

    for (let usr of this.users) {
      if (usr.login === newUser.login) {
        isRegister = true;
      }
    }

    if(isRegister) {
      window.alert('Taki użytkownik już istnieje!');
    } else {
      this.userService.addUser(newUser)
        .subscribe();
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}

