import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


/* login Register */

import { SelectionComponent } from './selection/selection.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { BrandLoginComponent } from './login-register/brand-login/brand-login.component';
import { InfluencerLoginComponent } from './login-register/influencer-login/influencer-login.component';
import { InfluenerSelectBrandComponent } from './influener-select-brand/influener-select-brand.component';

/* login Register */

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'selection',  component: SelectionComponent },
  { path: 'brand-login',  component: BrandLoginComponent },
  { path: 'influencer-login',  component: InfluencerLoginComponent },
  { path: 'select-brand',  component: InfluenerSelectBrandComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent},
];
   
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
