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
 userRepo: Repository;  

  constructor(private http: HttpClient) {
    this.user= new User("","","",[""]);
    this.userRepo= new Repository("","","");
  }
  getUser(username: string){
    interface ApiResponse{
      login: string;
      email: string;
      imageUrl: string;
    }
    let promise = new Promise((resolve,reject)=>{
      let apiURL = `https://api.github.com/users/${username}?access_token=${environment.myKey}`
      this.http.get<ApiResponse>(apiURL).toPromise().then(
        response =>{
          this.user.userName= response.login
          this.user.email = response.email
          this.user.image = response.imageUrl
        },
        error=>{
          console.log('Username not found')
  
          reject(error)

        })      
      return promise
    })
  }
  getUserRepo(username:string){
    interface ApiResponse{
      name:string
      html_url:string
      description: string
    }
    let promise = new Promise((resolve,reject)=>{
      let apiURL = `https://api.github.com/users/${username}/repos?access_token=${environment.myKey}`
      this.http.get<ApiResponse>(apiURL).toPromise().then(
        (response: any) => { // Success
          this.userRepo = response;
          
          resolve();
      },
      error=>{
        console.log('No repository found')

        reject(error)
      })
    })   
    return promise
  }

}     
