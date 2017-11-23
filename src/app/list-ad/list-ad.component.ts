import { Component, OnInit } from '@angular/core';
import { ListAdsService } from '../list-ads.service';
import { CategoryService } from '../category.service';
import { NameService } from '../name.service';
import {RequestOptions,Http,Request,RequestMethod,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import Chart from 'chart.js';

@Component({
  selector: 'app-list-ad',
  templateUrl: './list-ad.component.html',
  styleUrls: ['./list-ad.component.css']
})

export class ListAdComponent implements OnInit {
  Adss;
  aDet;
  ad_id;
  adI;
  constructor(
    private listAdsService: ListAdsService,
    private nameService: NameService,
    private categoryService: CategoryService,
    private http: Http
    ) {
      http.get('https://192.168.99.101:3011/ads/show_all')
                  .subscribe((response:Response) => {
                    console.log(response.json());
                    this.Adss=response.json();
                    response.json();
                  });
  }

  showAd(ad_id,i){
    //console.log("entering show");
    this.listAdsService.submitData(ad_id).subscribe(
      (response) =>  { console.log("mira"+response);
        //console.log(response.terms)
        this.aDet = response;
        this.adI=i;
        //console.log("aDet: " + this.aDet)
      });

     var ctx = document.getElementById("myChart_" + (ad_id - 1 ) );
     
     //console.log("myChart"+ ( ad_id - 1 ) );
     //console.log(this.Adss[ad_id].hits)
     //console.log(ad_id - 1)
     var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Hits"],
            datasets: [{
                label: '# of Hits',
                data: [this.Adss[i].hits],
                backgroundColor: [
                    'rgb(0, 206, 255)'
                ],
                borderColor: [
                    'rgb(52, 170, 222)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }]
            }
        }
    });
    
  }
  searAd(word){
    console.log(word);
    this.categoryService.submitCat(word).subscribe(
    (response) => {console.log("busca"+response);
    this.Adss= response;
    });
  }

  searName(word){
    console.log(word);
    this.nameService.submitCat(word).subscribe(
    (response) => {console.log("busca"+response);
    this.Adss= response;
    });
  }

  ngOnInit() {
}

}
