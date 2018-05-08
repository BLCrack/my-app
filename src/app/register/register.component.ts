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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  register(emailText: string, passwordText: string) {

    const newUser: User = ({
      id: '',
      login: emailText,
      password: passwordText
    });

    console.log(JSON.stringify(newUser));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
