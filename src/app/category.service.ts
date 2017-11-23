import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  submitCat(cat){
    return this.http.get('https://192.168.99.101:3011/ads/search_by_category?category='+cat)
                        .map(this.extractData);
  }
  extractData(response: Response) {
    let body = response.json(); // parse JSON string into JavaScript objects
    console.log("res: " + response.json());
    //console.log("extractData "+ body[0].id);
    return body;
  }
}
