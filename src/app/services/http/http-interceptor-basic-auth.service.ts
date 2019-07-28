import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  // intercept request | add header | send modified request to http handler
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'admin';
    const password = 'pass';
    const basicAuthString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthString
      }
    });
    return next.handle(request);
  }
}
