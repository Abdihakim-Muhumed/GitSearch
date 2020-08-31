import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitRequestService } from '../git-http/git-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users : User[]=[new User("Abdihakim",1,["Goals","Quotes"]),new User("Welicho33",2,["Foods"])];
  constructor(private gitService: GitRequestService) { 
   
  }
  ngOnInit() {
    this.gitService.userRequest()
    this.user= this.gitService.user;
    
  }

}