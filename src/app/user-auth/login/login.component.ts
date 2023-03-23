import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.router.navigate(['/dashboard']);
  }
}
