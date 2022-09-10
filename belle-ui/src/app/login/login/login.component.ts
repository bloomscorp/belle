import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responsedata: any;

  constructor(private service:AuthService, private route:Router) { 
  }

  loginData = {
    emailId:'',
    password:''
  }
  proceedLogin(){
    if(this.loginData.emailId != null && this.loginData.password != null )
    {
      this.service.proceedLogin(this.loginData).subscribe(result=>{
        if(result != null){
          this.responsedata = result;
          console.log(this.responsedata)
          localStorage.setItem('token',this.responsedata.data.accessToken);
          this.route.navigate(['/dashboard']);
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
