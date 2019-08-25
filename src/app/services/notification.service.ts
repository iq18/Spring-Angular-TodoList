import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  sendOverdueNotifications() {
    console.log('IN NOTIFICATION SERVICE');
    console.log(`${API_URL}/overdue`);
    return this.http.post(`${API_URL}/overdue`, null);
  }


}
