import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
