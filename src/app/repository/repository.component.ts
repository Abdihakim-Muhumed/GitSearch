import { Component, OnInit } from '@angular/core';
import { Repository} from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos: Repository[]=[new Repository("Abdihakim","Goals","A web application for my goals"),new Repository("Abdihakim","Quotes","A web app for the best tech quotes around"),new Repository("Welicho33","Foods","A web application for the foods i eat alot.")]
  constructor() { }

  ngOnInit(): void {
  }

}
