import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Error - Page Unavailable';
  adminMessage = 'Contact Admin @ 021345678';
  constructor() { }

  ngOnInit() {
  }

}
