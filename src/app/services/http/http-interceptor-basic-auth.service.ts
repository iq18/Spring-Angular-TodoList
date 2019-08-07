import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }

  // intercept request | add header | send modified request to http handler
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const username = 'admin';
    // const password = 'pass';
    // const basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    const basicAuthString = this.basicAuthService.getAuthenticatedToken();
    const username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      });
    }
    return next.handle(request);
  }
}
