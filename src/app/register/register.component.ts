import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  register(emailText: string, passwordText: string) {

    const newUser: User = ({
      id: '',
      email: emailText,
      password: passwordText
    })

    console.log(JSON.stringify(newUser));
  }
}
