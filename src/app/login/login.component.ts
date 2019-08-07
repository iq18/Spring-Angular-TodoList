import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHardcodedService } from '../services/auth-hardcoded.service';
import { BasicAuthService } from '../services/basic-auth.service';

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

  constructor(private router: Router,
              private authHardcodedService: AuthHardcodedService,
              private basicAuthservice: BasicAuthService) { }

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

  basicAuthLoginEvent() {
    this.basicAuthservice.executeBasicAuthentication(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log('Error:', error);
          this.invalidLogin = true;
        }
      );
  }

}
