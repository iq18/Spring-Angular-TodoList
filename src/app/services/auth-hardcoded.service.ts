import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHardcodedService {

  constructor() { }

  authenticate(username: string, password: string) {

    if (username === 'admin' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOutUser() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
