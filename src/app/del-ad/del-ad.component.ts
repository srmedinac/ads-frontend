import { Component, OnInit } from '@angular/core';
import { DeleteAdService} from '../delete-ad.service';
import {RequestOptions,Http,Request,RequestMethod,Headers,Response} from '@angular/http';


@Component({
  selector: 'app-del-ad',
  templateUrl: './del-ad.component.html',
  styleUrls: ['./del-ad.component.css']
})
export class DelAdComponent implements OnInit {
  Adss;
  constructor(
      private deleteAdService: DeleteAdService,
      private http: Http
    ) {
      http.get('https://192.168.99.101:3011/ads/show_all')
                  .subscribe((response:Response) => {
                    console.log(response.json());
                    this.Adss=response.json();
                    response.json();
                  });
   }

  ngOnInit() {
  }
  Delid(ad_id){
    this.deleteAdService.submitData(ad_id).subscribe(
      res => {console.log("del "+res)}
    )
  }
}
