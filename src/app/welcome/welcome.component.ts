import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessage: string;
  errorMessage: string;
  errorStatus = false;
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.name);
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.getHelloService());
    this.welcomeDataService.getHelloService().subscribe(
      response =>  this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getParameterisedWelcomeMessage() {
    console.log(this.welcomeDataService.getHelloService());
    this.welcomeDataService.getParameterisedHelloService(this.name).subscribe(
      response =>  this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessage = response.message;
    // console.log(response);
  }

  handleErrorResponse(error) {
    this.errorStatus = true;
    this.errorMessage = 'Error connecting to sever';
  }

}
