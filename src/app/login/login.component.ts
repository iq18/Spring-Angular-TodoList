import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list: string[];
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor() { }

  ngOnInit() {
  }

  loginEvent() {
    if (this.username === 'admin' && this.password === 'pass') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
  }

}