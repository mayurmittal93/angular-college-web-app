import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  
  userDetails=new BehaviorSubject<any>({});
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
}
