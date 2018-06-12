import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-register-c',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  addUser(emailText: string, passwordText: string) {

     let newUser: User = ({
      id: null,
      login: emailText,
      password: passwordText
    });

    this.userService.addUser(newUser)
      .subscribe();

    console.log(JSON.stringify(newUser));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}

