
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userDetails = new BehaviorSubject<any>({});
  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  userLogin() {
    let body = {
      "username": "admin",
      "password": "admin"
    }
    return this.http.post(environment.apiUrl + '/admins' + '/authenticate', body);
  }
}
