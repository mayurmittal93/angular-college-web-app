import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any;

  constructor(private globbalService: GlobalService) {

  }

  ngOnInit() {
    this.globbalService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    })

  }

}
