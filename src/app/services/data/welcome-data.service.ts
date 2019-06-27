import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {

  public messsage: string;
  constructor(public message: string) {
    this.message = message;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  getHelloService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworld-bean');
  }

  getParameterisedHelloService(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld-bean/${name}`);
  }
}
