import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeleteAdService {

  constructor(private http: Http) { }
  submitData(ad_id){
    let headers= new Headers({'Content-Type':'application/json'});
    let options= new RequestOptions({headers: headers});
    //console.log(ad_id);
    return this.http.post('https://192.168.99.101:3011/ads/delete_ad?id='+ ad_id, headers,options)
                .map((response:Response) => {
                //  console.log(response.json()[0]);
                  return response.json();
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
      //console.error(errMsg);
      return Observable.throw(errMsg);
    }

  }
