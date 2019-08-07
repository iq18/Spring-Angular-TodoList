import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';


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



  constructor(private http: HttpClient) {
  }

  getHelloService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld-bean`);
  }

  getParameterisedHelloService(name) {
    // const authHeader = this.createBasicAuthHeader();
    // const headers = new HttpHeaders({
    //   Authorization: authHeader
    // });
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld-bean/${name}`,
    // {headers}
    );
  }

  // createBasicAuthHeader() {
  //   const username = 'admin';
  //   const password = 'pass';
  //   const basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthString;
  // }
}
