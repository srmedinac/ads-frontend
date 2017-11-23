import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {Http,Response,Headers,RequestOptions} from '@angular/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name :string;
  username :string;
  email : string;
  birth :string;
  password :string;
  titles= "Sign Up";
  constructor(private authenticationService:AuthenticationService,
            private http: Http) { }

  ngOnInit() {
  }


  signup(){
    //console.log("debo enviar :"+ this.name + " "+ this.username+ " " + this.email + " " + this.birth +
    //" "+ this.password)
    if(this.name === '' || this.username == '' || this.email==='' || this.birth===''|| this.password===''){
      alert('no pueden haber campos vacios')
    }else{
      this.authenticationService.submitDataSignUp(this.name,this.username,this.email,this.birth,this.password)
      .subscribe((res :Response) =>{
        console.log("component")
        console.log(res.status)
        if (res.status>=200 && res.status<300 ){
          alert("Te has registrado exitosamente")
        }else{
          alert("Lo sentimos , sign up incorrecto")
        }
        return res
      })
    }
    
  }

}
