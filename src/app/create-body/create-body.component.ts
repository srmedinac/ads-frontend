import { Component, OnInit } from '@angular/core';
import { CreateAdService } from '../create-ad.service';
import {Http,Response,Headers,RequestOptions} from '@angular/http';


@Component({
  selector: 'app-create-body',
  templateUrl: './create-body.component.html',
  styleUrls: ['./create-body.component.css']
})
export class CreateBodyComponent implements OnInit {
  ad_name = ''
  terms = ''
  expiration = ''
  content = ''
  age = ''
  desc = ''
  price = '';
  category='';
  titles= "Create Ad";
  cates = [];
  nuevaTarea='';
  constructor(private createAdService: CreateAdService,
    private http: Http ) { }

  ngOnInit() {
  }

  createAd(){
    console.log("debo enviar :"+ this.ad_name + " "+ this.terms + " " + this.desc + " " + this.expiration +
    " "+ this.age + " " + this.price + " " + this.content +" "+ this.category)
    this.createAdService.submitDataCreateAd(this.ad_name,this.terms,this.desc,this.expiration,this.age,this.price,this.content,this.cates)
    .subscribe(res=>{
      console.log(res)
      if(res==true){
        alert ("Ad created succesfully");
      }
    })
  }


  agregarCat() {
     if (this.category != null){
         this.cates.push(this.category);
         this.category = null;
       }
    console.log("cates="+this.cates);
    };
  deleteCat(c) {
    var pos = this.cates.indexOf(c);
    this.cates.splice(pos);
  }


}
