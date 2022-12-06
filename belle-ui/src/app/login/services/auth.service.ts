import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://localhost:3000/api/v1/auth/login'
  constructor(private http:HttpClient) { 

  }
  proceedLogin(usercred:any){
    return this.http.post(this.apiurl, {"emailId":usercred.emailId, "password":usercred.password})
  }
  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }
  
}
