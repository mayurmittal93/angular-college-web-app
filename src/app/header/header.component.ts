import { Router } from '@angular/router';
import { UserDetailsService } from './../services/userDetailsService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userDetailsService : UserDetailsService, private router : Router) {}

  logout() {
    this.userDetailsService.isUserLoggedIn.next(false);
    this.router.navigate(['/login'])
  }

}
