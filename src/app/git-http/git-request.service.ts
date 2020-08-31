import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository} from '../repository';


@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
 user: User;
 repository: Repository[];  

  constructor(private http: HttpClient) {
    this.user= new User("",1,[""]);
    this.repository = [new Repository("","","")];
   }
   userRequest(){
    interface ApiResponse{
      login:string;
      id:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.userName = response.login
        this.user.id = response.id

        resolve()
      },
      error=>{
        this.user.userName = "Abdihakim"
        this.user.id = 1

        reject(error)
      })
    })
    return promise
  }
  repoRequest(){
    interface ApiResponse{
      userName:string;
      name: string;
      description: string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.repository[1].userName = response.userName
        this.repository[1].name = response.name
        this.repository[1].description = response.description

        resolve()
      },
      error=>{
        this.repository[1].userName = "Abdihakim"
        this.repository[1].name = "Goals"
        this.repository[1].description = "A web application for my goals"

        reject(error)
      })
    })
    return promise
  }
}

