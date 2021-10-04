import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {
 
  ROOT_URl:String="http://java-angular.us-west-2.elasticbeanstalk.com";  

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post(this.ROOT_URl+"/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.ROOT_URl+"/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get(this.ROOT_URl+"/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete(this.ROOT_URl+"/cancel/"+id);
  }
}
