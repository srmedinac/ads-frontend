import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListAdsService {

  constructor(private http: Http) { }

  submitData(ad_id){
    return this.http.get('https://192.168.99.101:3011/details/get_detail?ad_id='+ad_id)
                        .map(this.extractData);
  }

  extractData(response: Response) {
    let body = response.json(); // parse JSON string into JavaScript objects
    //console.log("res: " + response.json());
    //console.log("extractData "+ body[0].id);
    return body[0];
  }
}
