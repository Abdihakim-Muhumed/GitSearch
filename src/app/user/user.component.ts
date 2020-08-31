import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Repository} from '../repository';
import { GitRequestService } from '../git-http/git-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user1: User = new User("Abdihakim","","",["Goals","Quotes"])
  user: User;
  userRepo: Repository;
  myUsername: string = 'Abdihakim-Muhumed';
  constructor(public gitService: GitRequestService,) { }  
  searchUser(username:string, $event){
    if (username!==''){
      this.gitService.getUser(username||$event.target.value);
      this.user = this.gitService.user;   
      this.gitService.getUserRepo(username||$event.target.value);
      this.userRepo = this.gitService.userRepo;
    }
  }
  ngOnInit(): void {
    this.gitService.getUser(this.myUsername);
    this.user = this.gitService.user;    
    this.gitService.getUserRepo(this.myUsername);
    this.userRepo = this.gitService.userRepo;
  }
}