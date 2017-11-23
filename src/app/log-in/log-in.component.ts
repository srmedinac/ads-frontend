import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication.service';
import { Router } from "@angular/router";
import {Http,Response,Headers,RequestOptions} from '@angular/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email;
  password;
  
  constructor(
    private signUpService:AuthenticationService,
    private router:Router,
    private http:Http
  ) { }

  ngOnInit() {

  }

  login(){
    console.log("debo enviar info: "+ this.email +", "+ this.password);
    this.signUpService.submitDataLogIn(this.email,this.password)
    .subscribe((res:Response)=>{
      this.router.navigate(['/User']);
      console.log("logincomponent")
      return res
    })
  }
  
}
