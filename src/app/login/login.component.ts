import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHardcodedService } from '../services/auth-hardcoded.service';

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

  constructor(private router: Router, private authHardcodedService: AuthHardcodedService) { }

  ngOnInit() {
  }

  loginEvent() {
    if (this.authHardcodedService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
  }

}
