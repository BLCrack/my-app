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

    const newUser: User = ({
      id: null,
      login: emailText,
      password: passwordText
    });

    this.userService.addUser(newUser);

    console.log(JSON.stringify(newUser));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}

