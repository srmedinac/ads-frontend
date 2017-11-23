import { Component, OnInit } from '@angular/core';
import { EditAdService } from '../edit-ad.service';
import { DeleteAdService} from '../delete-ad.service';
import { ListAdsService } from '../list-ads.service';
import {RequestOptions,Http,Request,RequestMethod,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ed-er-ad',
  templateUrl: './ed-er-ad.component.html',
  styleUrls: ['./ed-er-ad.component.css']
})
export class EdErAdComponent implements OnInit {
  user_id=1
  ad_name=''
  terms=''
  expiration=''
  content=''
  age=''
  desc=''
  price=''
  Adss;
  aDet;
  adI;
  adId;
  constructor(
    private editAdService: EditAdService,
    private deleteAdService: DeleteAdService,
    private listAdsService: ListAdsService,
    private http: Http
    ) {
      http.get('https://192.168.99.101:3011/ads/show_all')
                  .subscribe((response:Response) => {
                    //console.log(response.json());
                    this.Adss=response.json();
                    response.json();

                  });
  }

  editAd(ad_id,i){
    console.log("entering show");
    this.listAdsService.submitData(ad_id).subscribe(
      (response) =>  {
        //console.log("mira"+response);
        //console.log(response.terms)
        this.aDet = response;
        this.adI=this.Adss[i];
        this.ad_name=this.adI.name;
        this.terms=this.aDet.terms;
        this.expiration=this.aDet.expiration;
        this.content=this.aDet.content;
        this.age=this.aDet.age;
        this.desc=this.aDet.desc;
        this.price=this.aDet.price;
        //console.log("aDet: " + this.aDet)
      });

  }

  ngOnInit() {
   }
   
   Delid(ad_id){
     this.deleteAdService.submitData(ad_id).subscribe(
       res => {console.log("del "+res)}
     )
   }

   saveAd(){
     console.log("debo enviar: "+ this.user_id +" "+this.adI.id+ " "+ this.ad_name + " "
      + this.terms + " " + this.expiration + " "+ this.content +
     " "+ this.age + " " + this.desc + " " + this.price)
     this.editAdService.submitDataEditAd(this.user_id,this.adI.id,this.ad_name,
                    this.terms,this.expiration,this.content,this.age,
                    this.desc,this.price)
                    .subscribe(res=>{
                      console.log("edit "+res)
                      if(res==true){
                        alert ("Ad save succesfully");
                      }
     })
   }

}
