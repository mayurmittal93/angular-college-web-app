import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { UserDetailsService } from 'src/app/services/userDetailsService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private router: Router, private userDetailsService: UserDetailsService,
    private notifyService: NotificationService) { }

  userDetails:
    { "userName": string, "password": string } = { "userName": 'mayurm@chetu.com', "password": 'Chetu@123' }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.loginForm.value);
    const fv = this.loginForm.value
    if (fv.userName == 'mayurm@chetu.com' && fv.password == 'Chetu@123') {
      // this.userDetailsService.userLogin().subscribe((res) => {
      //   console.log("response----from---api--->", res);
      // })
      this.notifyService.showSuccess('Wohoo...!!! Welcome to Apna College', 'Succcessfully logged in')
      this.userDetailsService.isUserLoggedIn.next(true);
      this.router.navigate(['/dashboard']);
    }
    else this.notifyService.showError('Username or Password my be incorrect, Please try again !!', 'Wrong Credentials')

  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
