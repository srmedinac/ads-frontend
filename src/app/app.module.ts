import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeDescriptionComponent } from './home-description/home-description.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HeaderDefaultComponent } from './header-default/header-default.component';
import { UserBodyComponent } from './user-body/user-body.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { CreateBodyComponent } from './create-body/create-body.component';
import { EdErAdComponent } from './ed-er-ad/ed-er-ad.component';
import { ListAdComponent } from './list-ad/list-ad.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { DelAdComponent } from './del-ad/del-ad.component';
import * as $ from 'jquery';
import mdl from 'material-design-lite';


//SERVICES
import { Angular2TokenService } from 'angular2-token';
import { Http, HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CreateAdService } from './create-ad.service';
import { ListAdsService } from './list-ads.service';
import { DeleteAdService } from './delete-ad.service';
import { CategoryService } from './category.service';
import { EditAdService } from './edit-ad.service';
import { NameService } from './name.service';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'User', component: UserMenuComponent},
  { path: 'EdErAd', component: EdErAdComponent},
  { path: 'ListAd', component: ListAdComponent},
  { path: 'CreateAd', component: CreateAdComponent},
  { path: 'DelAd', component: DelAdComponent},
  { path: 'login',component:LogInComponent },
  { path: '', redirectTo: '/Home', pathMatch:'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomeComponent,
    FooterComponent,
    LogInComponent,
    HomeDescriptionComponent,
    HomeBodyComponent,
    SignUpComponent,
    UserMenuComponent,
    HeaderDefaultComponent,
    UserBodyComponent,
    EdErAdComponent,
    ListAdComponent,
    CreateAdComponent,
    CreateBodyComponent,
    AdvertisementComponent,
    DelAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CreateAdService,
              ListAdsService,
              DeleteAdService,
              Angular2TokenService,
              AuthenticationService,
              CategoryService,
              CreateAdService,
              EditAdService,
              NameService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
