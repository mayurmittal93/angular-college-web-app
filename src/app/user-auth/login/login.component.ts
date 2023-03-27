import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/userDetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,private userDetails:UserDetailsService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.userDetails.isUserLoggedIn.next(true);
    this.router.navigate(['/dashboard']);
  }
}
