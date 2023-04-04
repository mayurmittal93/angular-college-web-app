import { Component } from '@angular/core';
import { UserDetailsService } from './services/userDetailsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CollegeWebApp';
  isUserLoggedIn!:boolean;

  constructor(private userDetailsService:UserDetailsService){
  }

  ngOnInit(){
    this.userDetailsService.isUserLoggedIn.subscribe(data=>{
      this.isUserLoggedIn=data;
    });
  }


}
