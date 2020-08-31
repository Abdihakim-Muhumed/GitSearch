import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[]=[new User("Abdihakim",new Image(10,10),["Goals","Quotes"]),new User("Welicho33",new Image(),["Foods"])];
  constructor() { }
  ngOnInit(): void {
  }

}