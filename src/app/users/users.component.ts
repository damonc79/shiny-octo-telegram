import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: string = "";
  displayname: string = "";

  constructor() { }

  ngOnInit() {
  }

  clearUserName(){
    this.username = "";
  }

}
