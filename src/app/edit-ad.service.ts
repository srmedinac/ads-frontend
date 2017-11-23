import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()
export class EditAdService {
  editAdURL = 'https://192.168.99.101:3011/ads/edit_ad'
  constructor(private http: Http) {
  }

  submitDataEditAd(user_id,ad_id,ad_name,terms,expiration,content,age,desc,price){
    let data={
        user_id:1,   //this id is test, need to change//
        ad_id:ad_id,
        ad_name:ad_name,
        terms:terms,
        expiration:expiration,
        content:content,
        age:age,
        desc:desc,
        price:price
    }
    let body=JSON.stringify(data);
    console.log(body);
    let headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    let options = new RequestOptions({ headers : headers });
    return this.http.post(this.editAdURL,body,options).map((response :Response)=>{
      console.log(response)
      return response.json();
      //return response.json();
    }).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
