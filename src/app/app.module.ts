import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { AppRoutingModule } from './app.routing.module';
import { SelectionComponent } from './selection/selection.component';
import { BrandLoginComponent } from './login-register/brand-login/brand-login.component';
import { InfluencerLoginComponent } from './login-register/influencer-login/influencer-login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { InfluenerSelectBrandComponent } from './influener-select-brand/influener-select-brand.component';

   
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    SelectionComponent,
    BrandLoginComponent,
    InfluencerLoginComponent,
    LoginHeaderComponent,
    InfluenerSelectBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
