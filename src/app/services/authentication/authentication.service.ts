import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
@Injectable()
export class AuthenticationService {
   signUpURL='https://192.168.99.101:3011/signup';
   loginURL='https://192.168.99.101:3011/login';
  captchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
  secretKey = '6Lew-TkUAAAAACYxWMgfG4fdyxHoLY7qVH_WLnUN';
  constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


  submitDataSignUp(name,username,email,birth,password){
    let data={

        name:name,
        username:username,
        email:email,
        birth:birth,
        password:password

    }
    let body=JSON.stringify(data);
    console.log(body);
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });
    return this.http.post(this.signUpURL,body,options).map((response :Response)=>{
      console.log("response")
      console.log(response.status);
      console.log(response.json())
      return response;
    }).catch(this.handleError);
  }

  submitDataLogIn(email,password){
    let data={
      email:email,
      password:password
    }
    let body=JSON.stringify(data);
    //console.log("body "+body);
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });
    return this.http.post(this.loginURL,body,options).map((response :Response)=>{
      console.log("response");
      console.log(response.status);
      console.log(response);
      this.storeUser(response.json());
      return response;
    }).catch(this.handleError);
  }


  storeUser(userData){
    console.log("store user"+ userData.id)
    localStorage.setItem('user_id',userData.id);
    localStorage.setItem('name',userData.name);
    localStorage.setItem('username',userData.username);
    localStorage.setItem('email',userData.email);
  }
  retrieveUser(){
    console.log(localStorage)
    return localStorage;
  }
// function from angular.io
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      if(error.status==401){
        alert ("You are not autorizated to Log In");
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
     //alert(errMsg);
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
