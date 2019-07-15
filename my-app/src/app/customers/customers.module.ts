import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HomeComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerComponent,
    NavbarComponent
  ]
})
export class CustomersModule { }
