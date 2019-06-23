import { Component, OnInit } from '@angular/core';
import { AuthHardcodedService } from '../services/auth-hardcoded.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthService: AuthHardcodedService) { }

  ngOnInit() {
  }

}
