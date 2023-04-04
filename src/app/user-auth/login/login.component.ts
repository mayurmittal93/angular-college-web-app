import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/userDetailsService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private userDetailsService: UserDetailsService) { }

  userDetails:
    { "userName": string, "password": string } = { "userName": 'mayurm@chetu.com', "password": 'Chetu@123' }

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.loginForm.value);
    const fv = this.loginForm.value
    if (fv.userName == 'mayurm@chetu.com' && fv.password == 'Chetu@123') {
      this.userDetailsService.isUserLoggedIn.next(true);
      this.router.navigate(['/dashboard']);
    }
    else alert("Username or Password my be incorrect, Please try again !!")
  }
}
