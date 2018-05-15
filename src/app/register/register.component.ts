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

    for (let usr of this.users) {
      if (usr.login === newUser.login) {
        window.alert('Taki login już istnieje');
      } else {
        this.userService.addUser(newUser)
          .subscribe();
      }
    }
    console.log(JSON.stringify(newUser));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}

