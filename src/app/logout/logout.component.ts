import { Component, OnInit } from '@angular/core';
import { AuthHardcodedService } from '../services/auth-hardcoded.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthService: AuthHardcodedService) { }

  ngOnInit() {
    this.hardcodedAuthService.logOutUser();
  }

}
