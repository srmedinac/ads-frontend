import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication.service';
@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.css']
})
export class HeaderDefaultComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
  }
  name_app = "ADs";

  logout(){
    localStorage.clear();
  }
}
